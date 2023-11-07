import Image from "next/image";

export const FirstView = () => {
  return (
    <section>
      <div className="relative h-[540px] bg-gray-100">
        <Image src="/no-image.png" alt="logo" fill className="object-cover" />
      </div>
    </section>
  );
};
