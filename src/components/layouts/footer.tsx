import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-7xl items-center justify-between">
      <Link href="/" className="flex h-20 w-full">
        <Image
          src="/no-image.png"
          alt="logo"
          width={120}
          height={80}
          className="object-cover"
        />
      </Link>

      <div className="w-full text-right text-xs">©2023 株式会社サンプル</div>
    </footer>
  );
};
