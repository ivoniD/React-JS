import { GridItemSection } from "./GridItemSection"


export const SecondGallerySection = () => {
  return (
    <div className="row">
    <div className="col-xs-12">
      <div className="tm-img-gallery-container">
        <div className="tm-img-gallery gallery-second">
          <div className="tm-gallery-title-container">
            <div className="tm-bg-dark-blue tm-white-border tm-textbox-padding tm-margin-b">
              <h2 className="tm-text-title tm-gallery-title tm-margin-b-0">
                <span className="tm-white">Second Gallery</span>
              </h2>
            </div>
            {/* <div className="tm-bg-white-half"></div> */}
          </div>

          <GridItemSection divClassName="grid-item grid-item-big" href="img/tm-img-07.jpg" img="img/tm-img-07-tn.jpg" className="img-fluid tm-img-no-border" />

          <GridItemSection divClassName="grid-item grid-item-big"  href="img/tm-img-08.jpg" img="img/tm-img-08-tn.jpg" className="img-fluid tm-img-no-border" />

          <GridItemSection divClassName="grid-item grid-item-square"  href="img/tm-img-09.jpg" img="img/tm-img-09-tn.jpg" className="img-fluid tm-img-no-border" />

          <GridItemSection divClassName="grid-item grid-item-square"  href="img/tm-img-10.jpg" img="img/tm-img-10-tn.jpg" className="img-fluid tm-img-no-border" />

          <GridItemSection divClassName="grid-item grid-item-square"  href="img/tm-img-11.jpg" img="img/tm-img-11-tn.jpg" className="img-fluid tm-img-no-border" />
   
          <GridItemSection divClassName="grid-item grid-item-square"  href="img/tm-img-12.jpg" img="img/tm-img-12-tn.jpg" className="img-fluid tm-img-no-border" />


        </div>
      </div>
    </div>
  </div>
  )
}