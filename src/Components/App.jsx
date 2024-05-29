import Header from "./Header/Header";
import "./App.css";
import "./Header/Header.css";
import Footer from "./Footer/Footer";
import Slider from "./MiddleBody/Slider";
import { Routes, Route, Link } from "react-router-dom";

import BodyCatalog from "./MiddleBody/BodyCatalog/BodyCatalog";
import CategoryProduct from "./MiddleBody/BodyCatalog/CategoryProduct/CategoryProduct";
function App() {
 

  
  return ( 
   <div className="page">
     <Header  />
      
      <div >
      <Routes>
        <Route path="/catalog" element={<><Slider/><BodyCatalog/></>}/>
        <Route path="/brands" element={<Footer/>}/>
        <Route path="/cats" element={<CategoryProduct/>}/>
        <Route path="/dog" element={<>uuuuiuhuhh</>}/>
        <Route path="/mouse" element={<>uuuuiuhuhh</>}/>
        <Route path="/parrot" element={<>uuuuiuhuhh</>}/>
      </Routes>
     
      </div>

      <footer>
        <Footer ></Footer>
        <hr/> 
        <span>&copy;2024-{new Date().getFullYear()}</span>
      </footer>

     
    </div>

    
  );
}

export default App;
