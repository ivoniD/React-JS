import { NavSection } from "./NavSection";
import { FooterSection } from "./FooterSection";
import { HomeSection } from "./HomeSection";
import { AboutSection } from "./AboutSection";
import { GallerySection } from "./GallerySection"
import { ContactSection } from "./ContctSection";


function App() {
  return (
    <div >
    <NavSection/>
    <ul>
    <HomeSection/>
    <AboutSection/> 
    <GallerySection/> 
    <ContactSection/>
    </ul>
    <FooterSection/>
    </div>
  );

}

export default App;
