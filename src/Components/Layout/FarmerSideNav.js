
import "./SideNabar.css";
import { Link } from "react-router-dom";
import { FarmerSideBarData } from "./FarmerSideBarData";

export function FarmerSideNav()

{
    return(
      
     <div className="Sidebar">
      <ul className="SidebarList">
      {FarmerSideBarData.map((val,key)=>{
      return(
        <li 
        key={key} 
        className="row"
        id={window.location.pathname==val.link ? "active" : " "}
        >
        <Link className="SidebarList row" to={val.link}>
          
          <div id="icon">{val.icon}</div>
          <div id="title">{val.title}</div>
          </Link>
        </li>
        
      )
     })}
     </ul>
     </div> 
    
    );
}