import React from "react";
import "../App";
import LowerSidebarVector from "../assets/images/Lower-Sidebar-Vector.png";
import Cross from "../assets/icons/cross-main.svg";

const Banner = () => {
  
  const handleRemove = () =>{
    document.getElementById("id").style.display = "none";
  }

  return (
    <div className="main-mid" id="id" style={{ paddingRight: "70px" }}>
      <img className="vecIcon" src={LowerSidebarVector} alt="loading" />
      <p>
        Ask me a question or ask me to summarize a document for you! While like
        humans, I'm not perfect and have my limitations, your feedback is the
        key to my improvement.
      </p>
      <img src={Cross} className="crossIcon" alt="loading" onClick={handleRemove}/>
    </div>
  );
};
export default Banner;
