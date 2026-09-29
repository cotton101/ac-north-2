/** A ruled list with small index numbers, used for "what we do" style lists. */
export default function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="border-t border-rule">
      {items.map((item, i) => (
        <li
          key={item}
          className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-rule py-4 text-[1.0625rem] leading-relaxed"
        >
          <span className="pt-0.5 font-mono text-[0.8125rem] text-accent tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
