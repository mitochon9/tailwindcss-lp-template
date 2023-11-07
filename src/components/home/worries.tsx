import { WorryCard } from "./worry-card";

const worries = [
  { img: "/no-image.png", title: "お悩み 1", description: "お悩み 1 の説明" },
  { img: "/no-image.png", title: "お悩み 2", description: "お悩み 2 の説明" },
  { img: "/no-image.png", title: "お悩み 3", description: "お悩み 3 の説明" },
];

export const Worries = () => {
  return (
    <section id="worries" className="bg-blue-50 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {worries.map((worry) => (
          // {...worry} は title={worry.title} description={worry.description} でも可
          <WorryCard key={worry.title} {...worry} />
        ))}
      </div>
    </section>
  );
};
