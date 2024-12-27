import Hero from "./components/Hero";
import FeaturedProducts from "./components/Products";
import CategorySection from "./components/CategorySection";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";

import LogoSection from "./components/LogoSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoSection />
      <FeaturedProducts />
      <CategorySection />
      <StyleSection />
      <ProductSection />
    </div>
  );
}
