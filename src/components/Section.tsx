import type { ReactNode } from "react";

/** A titled section on a 12-column grid: label on the left, content on the right. */
export default function Section({
  title,
  id,
  children,
  tone = "paper",
}: {
  title: string;
  id?: string;
  children: ReactNode;
  tone?: "paper" | "stone";
}) {
  return (
    <section
      id={id}
      className={`border-b border-rule ${tone === "stone" ? "bg-stone" : ""}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="wrap grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <h2
          id={id ? `${id}-title` : undefined}
          className="text-[1.375rem] font-semibold leading-snug tracking-[-0.015em] md:col-span-4"
        >
          {title}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
