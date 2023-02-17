import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Navoptions from "./components/Navoptions.js"
import Slider from './components/Slider.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"


function App() {
  return (
   <Router>
          <PreNavbar/>
          <Navbar/>
          <Navoptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
          <Slider start={data.banner.start}/>
          <Offers/>
          <Heading text="STAR PRODUCTS"/>
          <StarProduct/>
          <Heading text="HOT ACCESSORIES"/>
          <HotAccessoriesMenu/>

          <Routes>
            <Route exact path="/music" element ={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
            <Route exact path="/smartDevices" element ={<HotAccessories smartDevices={data.hotAccessories.smartDevices} smartDevicesCover={data.hotAccessoriesCover.smartDevices}/>}/>
            <Route exact path="/home" element ={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
            <Route exact path="/lifestyle" element ={<HotAccessories lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle}/>}/>
            <Route exact path="/mobileAccessories" element ={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
          </Routes>

          <Heading text="PRODUCT REVIEWS"/>
          <ProductReviews ProductReviews/>
          <Heading text="VIDEOS"/>
          <Videos videos={data.videos}/>
          <Heading text="IN THE PRESS"/>
          <Banner banner={data.banner}/>
          <Footer/>
   </Router>
  );
}

export default App;
