import Link from "next/link";

interface CtaButtonProps {
  children: React.ReactNode;
  href: string;
}

export const CtaButton = ({ children, href }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      {children}
    </Link>
  );
};
