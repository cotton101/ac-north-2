import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "md", onClick }: { size?: "md" | "lg"; onClick?: () => void }) {
  const mark = size === "lg" ? 44 : 38;
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 font-semibold tracking-[-0.02em] text-ink ${
        size === "lg" ? "text-[1.75rem]" : "text-[1.5rem]"
      }`}
    >
      <Image src="/ac-north-mark-blue.png" alt="" width={mark} height={mark} priority style={{ width: mark, height: mark }} />
      AC North
    </Link>
  );
}
