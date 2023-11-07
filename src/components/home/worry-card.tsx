import Image from "next/image";

interface WorryCardProps {
  img: string;
  title: string;
  description: string;
}

export const WorryCard = ({ img, title, description }: WorryCardProps) => {
  return (
    <div className="max-w-xs rounded-md border bg-white">
      <div className="relative h-48 w-full">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="space-x-2 p-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
