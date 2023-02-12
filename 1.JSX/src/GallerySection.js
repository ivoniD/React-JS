import { FirstGallerySection } from "./FirstGalletySection";
import { SecondGallerySection } from "./SecondGallerySection";

export const GallerySection = () => {
  return (
    <li>
      <div className="cd-full-width">
        <div className="container js-tm-page-content tm-section-margin-t"data-page-no="3">

          <FirstGallerySection />

          {/* <SecondGallerySection /> */}

        </div>
      </div>
    </li>
  );
};
