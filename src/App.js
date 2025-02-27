import './App.css';
import Header from "./components/header/Header";
import CarouselComponent from "./components/carousel/CarouselCompon";
import Uideveloper from "./components/modal/Uideveloper";
import TrendingCards from "./components/trendingCards/TrendingCards";
import Recentproducts from "./RecentAdditions/Recentproducts";
import Discover from "./components/Discover/Discover";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Achivers from "./components/Achivers/Achivers";
import Great from "./components/Great/Great";
import Lengthen from "./components/Lengthen/Lengthen";
import Latest from "./components/Latestjob/Latest";
import Context from "./components/Context/Context";
import Pictures from "./components/Pictures/Pictures";
import Know from "./components/know/Know";
import Footer from './components/Footer/Footer';
export default function Hello (){
  return(
    <>
    <Header/>
    <CarouselComponent/>
    
  <Uideveloper/>
  
  <h1 style={{position:"relative",left:"100px"}}>TRANDING COURSES</h1>
  <TrendingCards/>
  <h1 style={{position:"relative",left:"100px"}}>RECENT PRODUCTS</h1>
<Recentproducts/>

<h1 style={{position:"relative",left:"100px"}}>DISCOVER TOP CATEGORIES</h1>

<Discover/>


<br>
</br>
<br>
</br>
<Contact/>
<br>
</br>
<br>
</br>
<h1 style={{position:"relative",left:"100px"}}>ACHIEVERS IT EDGE</h1>
<Achivers/>
<br>
</br>
<br>
</br>
<Great/>
<br>
</br>
<br>
</br>
<Lengthen/>
<br>
</br>
<h1 style={{position:"relative",left:"100px"}}>LATEST COURSES</h1>
<Latest />
<br>
</br>

<Context />
<br>
</br>

<Pictures/>
<Know />
<Footer/>
    </>
    
  )
}




