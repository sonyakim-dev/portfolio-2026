/** Section label row: mono title on the left, item count on the right, hairline below. */
export function SectionHeader({ id, title, count }: { id: string; title: string; count: number }) {
  return (
    <div className="microtype mb-8 flex justify-between border-b border-line pb-3 text-[11px] sm:pb-4 sm:text-xs">
      <h2 id={id}>{title}</h2>
      <span>({count})</span>
    </div>
  );
}
