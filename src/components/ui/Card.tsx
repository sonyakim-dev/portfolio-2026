import type { AnchorHTMLAttributes, ReactNode } from "react";

type CardProps = {
  /** Left column (top on phones): an image or an info panel, with its own wrapper. */
  media: ReactNode;
  /** Optional glyph in the body's top-right corner, level with the first microtype line. */
  icon?: ReactNode;
  /** Body content; use `card-title` for the heading. */
  children: ReactNode;
  /** Makes the whole card a button (when there's no `href`), e.g. to open a dialog. */
  onClick?: () => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "media" | "onClick">;

/**
 * Glass card shell shared by project and experience cards: media column + body column (the `card` utilities).
 * - `href`: the whole card is a link and takes the anchor props.
 * - `onClick`: a static <article> with a full-size button stretched over it (a <button> can't hold the card's
 *   headings and lists); `aria-label` / `aria-haspopup` go on that button.
 * - neither: a static <article>.
 */
export function Card({ media, icon, children, href, onClick, ...linkProps }: CardProps) {
  const body = (
    <>
      {media}
      <div className="card-body relative">
        {icon && (
          // `text-[12px] h-lh` matches the height of a microtype label line, so the icon centers on it
          <span
            aria-hidden="true"
            className="absolute top-0 right-1.5 flex h-lh items-center text-[12px] md:top-1.5 md:right-2"
          >
            {icon}
          </span>
        )}
        {children}
      </div>
    </>
  );

  if (href !== undefined) {
    return (
      <a href={href} {...linkProps} className="group liquid-card card">
        {body}
      </a>
    );
  }

  return (
    <article className="group liquid-card card">
      {body}
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          aria-label={linkProps["aria-label"]}
          aria-haspopup={linkProps["aria-haspopup"]}
          className="absolute inset-0 cursor-pointer rounded-3xl"
        />
      )}
    </article>
  );
}
