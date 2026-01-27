import { useBooks } from "../hooks/useBook"
import BooksFullSection from "../components/pages/home/sections/BooksFullSection";
import BooksWideSection from "../components/pages/home/sections/BooksWideSection";
import GridLogoSection from "../components/pages/home/sections/GridLogoSection";
import PromotionSection from "../components/pages/home/sections/PromotionSection";
import SlideBannerSection from "../components/pages/home/sections/SlideBannerSection";
import Button from "../components/shared/button/ButtonCta";

export default function HomePage() {
  const sections = useBooks('https://api.fidibo.com/flex/page/HOME_MENU')

  const SECTION_COMPONENTS = {
    HL_BOOKS_FULL: BooksFullSection,
    HL_BOOKS_WIDE: BooksWideSection,
    HL_GRID_LOGO: GridLogoSection,
    HL_PROMOTION_FULL: PromotionSection,
    SLIDE_SHOW_BANNER: SlideBannerSection
  };

  if (sections.length === 0 || sections === null) {
    return (
      <p>is Loading...</p>
    )
  }
  console.log(sections);
  return (
    <div className="flex flex-col gap-20">
      {sections.map((section, i) => {

        const Component = SECTION_COMPONENTS[section.component];
        if (!Component) return null;

        return (
            <Component key={i} data={section} />

        )
      })}
    </div>
  )
}