import { GridItemSection } from "./GridItemSection";

export const FirstGallerySection = (props) => {
  return (
    <div className="row tm-margin-b">
      <div className="col-xs-12">
        <div className="tm-img-gallery-container">
          <div className="tm-img-gallery gallery-first">
            <div className="tm-gallery-title-container">
              <div className="tm-bg-dark-blue tm-white-border tm-textbox-padding tm-margin-b">
                <h2 className="tm-text-title tm-gallery-title tm-margin-b-0">
                  <span className="tm-white">First Gallery</span>
                </h2>
              </div>
              {/* <div className="tm-bg-white-half"></div> */}
            </div>

            <GridItemSection divClassName="grid-item" href="img/tm-img-01.jpg" img="img/tm-img-01-tn.jpg" className="img-fluid tm-img"/>

            <GridItemSection divClassName="grid-item" href="img/tm-img-02.jpg" img="img/tm-img-02-tn.jpg" className="img-fluid tm-img"/>

            <GridItemSection divClassName="grid-item" href="img/tm-img-04.jpg" img="img/tm-img-04-tn.jpg" className="img-fluid tm-img"/>

          </div>
        </div>
      </div>
    </div>
  );
};
