import { X } from "lucide-react";
import { useId, useRef } from "react";

import type { GallerySection, Media } from "@/data/galleries";
import type { Project } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

// CSS columns: mixed aspect ratios pack like a contact sheet instead of cropping to a grid.
const MEDIA_COLUMNS = { 1: "", 2: "columns-2", 3: "columns-2 sm:columns-3" } as const;

/**
 * A project's copied page in a modal sheet over a blurred sky. Mounted only while open (so the video doesn't load
 * with the page); native <dialog> handles focus, Esc and the top layer. Esc, the close button and the scrim all
 * drift it away before closing.
 */
export function ProjectGalleryDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const { title, category, gallery } = project;
  const dialog = useRef<HTMLDialogElement>(null);
  const closing = useRef(false);
  const headingId = useId();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const { contextSafe } = useGSAP(
    () => {
      if (!dialog.current!.open) dialog.current!.showModal();
      gsap.from("[data-scrim]", { autoAlpha: 0, duration: reduce ? 0 : 0.5, ease: "power2.out" });
      gsap.from("[data-panel]", { autoAlpha: 0, y: 32, duration: reduce ? 0 : 0.7, ease: "power3.out" });
    },
    { scope: dialog },
  );

  const drift = contextSafe((onComplete: () => void) => {
    const duration = reduce ? 0 : 0.35;
    gsap.to("[data-scrim]", { autoAlpha: 0, duration, ease: "power2.in" });
    gsap.to("[data-panel]", { autoAlpha: 0, y: 24, duration, ease: "power2.in", onComplete });
  });

  const close = () => {
    if (closing.current) return;
    closing.current = true;
    drift(() => dialog.current?.close());
  };

  if (!gallery) return null;

  return (
    <dialog
      ref={dialog}
      aria-labelledby={headingId}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClose={onClose}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-transparent p-0 text-fg backdrop:bg-transparent"
    >
      <div data-scrim aria-hidden="true" onClick={close} className="fixed inset-0 bg-sky-200/55 backdrop-blur-md" />

      <article
        data-panel
        className="relative mx-auto my-3 w-[calc(100%-1.5rem)] max-w-5xl rounded-3xl bg-sky-50/85 shadow-glass backdrop-blur-xl sm:my-10 sm:w-[calc(100%-4rem)]"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-line bg-sky-50/80 px-5 py-4 backdrop-blur-md sm:px-8 sm:py-5">
          <div className="space-y-1">
            <p className="microtype text-[11px] text-muted">{category}</p>
            <h2 id={headingId} className="text-xl leading-tight font-semibold tracking-[-0.02em] md:text-2xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="-mr-2 grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-500 ease-drift hover:bg-fg hover:text-paper"
          >
            <X aria-hidden="true" strokeWidth={1.6} className="size-5" />
          </button>
        </header>

        <div className="space-y-12 px-5 pt-8 pb-10 sm:space-y-16 sm:px-8 sm:pt-10 sm:pb-14">
          {gallery.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>
      </article>
    </dialog>
  );
}

function Section({ section }: { section: GallerySection }) {
  const { logo, heading, text, facts, media, columns = 1 } = section;
  const hasIntro = logo || heading || text || facts;
  return (
    <section className="space-y-6">
      {hasIntro && (
        <div className="space-y-4">
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              // square-ish marks need more height than wordmarks; multiply drops their white box on the sky
              className={`w-auto mix-blend-multiply ${logo.width / logo.height < 2 ? "h-20 sm:h-24" : "h-8 sm:h-10"}`}
            />
          )}
          {heading && <h3 className="text-base leading-snug font-semibold md:text-lg">{heading}</h3>}
          {text && <p className="text-sm leading-relaxed md:text-base">{text}</p>}
          {facts && (
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[max-content_1fr]">
              {facts.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="microtype pt-0.5 text-[11px] text-muted">{label}</dt>
                  <dd className="text-sm leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}

      {media && (
        <div className={`gap-3 *:mb-3 sm:gap-4 sm:*:mb-4 ${MEDIA_COLUMNS[columns]}`}>
          {media.map((item) => (
            <MediaItem key={item.src} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

function MediaItem({ item }: { item: Media }) {
  const className = "h-auto w-full break-inside-avoid rounded-2xl bg-line";
  if (item.type === "embed") {
    return (
      <iframe
        src={item.src}
        title={item.alt}
        width={item.width}
        height={item.height}
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
        allow="encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className={className}
      />
    );
  }
  if (item.type === "video") {
    // A silent looping showreel, like the original page; with reduced motion it waits for the play button.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return (
      <video
        src={item.src}
        poster={item.poster}
        aria-label={item.alt}
        width={item.width}
        height={item.height}
        muted
        loop
        playsInline
        autoPlay={!reduce}
        controls={reduce}
        preload={reduce ? "none" : "auto"}
        className={className}
      />
    );
  }
  return (
    <img
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
