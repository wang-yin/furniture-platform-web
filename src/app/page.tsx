import Footer from "@/components/layouts/Footer";
import Slogan from "@/components/layouts/Slogan";
import Product from "@/components/layouts/Product";
import HeroSection from "@/components/layouts/HeroSection";
import CategorySection from "@/components/layouts/CategorySection";
import StyleSelection from "@/components/layouts/StyleSelection";
import FeaturedCollection from "@/components/layouts/FeaturedCollection";

export default function Home() {
  return (
    <>
      <div>
        {/* 第一區 */}

        <HeroSection />

        {/* 第二區 */}

        <CategorySection />

        {/* 第三區 */}

        <Product />

        {/* 第四區 */}

        <StyleSelection />

        <div className="bg-[#f7f6f2]">
          <div>
            <Slogan />
          </div>

          {/* 第五區 */}

          <FeaturedCollection />
        </div>

        {/* 第六區 */}
        <Footer />
      </div>
    </>
  );
}
