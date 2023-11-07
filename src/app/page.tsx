import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { FirstView } from "@/components/home/first-view";
import { Price } from "@/components/home/price";
import { Worries } from "@/components/home/worries";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <FirstView />

        <Worries />

        <Features />

        <Price />

        <Cta />

        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
