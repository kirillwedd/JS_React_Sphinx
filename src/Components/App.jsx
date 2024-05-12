import Header from "./Header/Header";
import "./App.css";
import "./Header/Header.css";
import Footer from "./Footer/Footer";
import Slider from "./MiddleBody/Slider";
import { useState } from "react";
import BodyCatalog from "./MiddleBody/BodyCatalog/BodyCatalog";
/*
import { Routes, Route, Link } from "react-router-dom";
import {} from '../Components/MiddleBody/BodyCatalog/BodyCatalog'*/
function App() {
  const[tab, setTab]= useState("catalog");
  
  function invisibility(){
    <Slider style={{visibility:"hidden"}}/>
  }

  return ( 
   <div className="page">
     <Header navActive={tab} onChange={(current)=>setTab(current)} />
      
      <div style={{marginTop:"0px"} }>
      {tab==="catalog" &&(<BodyCatalog/>)}
      {tab==="brands" ? invisibility &&(<div>hhhhuhuihiuuihuih   </div>) : null}
      {tab==="delivery" ?invisibility &&(<div>hhhhuhuihiuuihuih   </div>) : null}
      {tab==="stock" ?invisibility &&(<div>hhhhuhuihiuuihuih   </div>) : null}
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
