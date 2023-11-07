import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../common/cta-button";

const navItems = [
  { href: "#worries", label: "お悩み" },
  { href: "#features", label: "特徴" },
  { href: "#price", label: "料金" },
  { href: "#faq", label: "よくある質問" },
];

export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1>
          <Link href="/" className="flex h-20 w-full">
            <Image
              src="/no-image.png"
              alt="logo"
              width={120}
              height={80}
              className="object-cover"
            />
          </Link>
        </h1>

        <nav className="flex items-center gap-4">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-500 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <CtaButton href="/form">今すぐお申し込み</CtaButton>
        </nav>
      </div>
    </header>
  );
};
