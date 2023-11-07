import { CtaButton } from "../common/cta-button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-blue-100 py-20">
      <div className="mx-auto h-80 max-w-5xl">
        <div className="flex h-full flex-col items-center justify-center gap-4 sm:flex-row">
          <h2>Cta</h2>
          <CtaButton href="/form">今すぐお申し込み</CtaButton>
        </div>
      </div>
    </section>
  );
};
