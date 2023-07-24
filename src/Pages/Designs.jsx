import React from "react";
import Navbar from "../components/Navbar";
import Name from "../components/name";
import {useState} from "react"
import Portfolio from "../components/portfolio";
import Problem from "../components/problem";
import storyboard from "../assets/storyboard.jpg"
import wireframe from "../assets/wireframe.png";
import bizAds from "../assets/LocalBizads.svg"
import bizaddFrame from "../assets/NairaLand.svg"


const Designs = ()=>{
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    return(
        <div className=" w-screen bg-black h-full min-h-screen ">
            <Navbar/>
            <div className="h-screen w-full flex flex-col  bg-cover bg-focus  gap-8">
            <img
            className="w-full h-full rounded-2xl mx-auto mb-4"
            src={storyboard}
            alt="Profile Image"
          />
           
            
           
            </div>
            <div className="h-screen w-full flex flex-col bg-problem justify-center bg-cover bg-focus  gap-8">
                
            <img
            className="w-full h-full rounded-2xl mx-auto mb-4 mt-8"
            src={wireframe}
            alt="Profile Image"
          />
            
           
            </div>
            <div className="h-screen w-full flex flex-col bg-problem justify-center bg-cover bg-focus  gap-8">
                
                <img
                className="w-full h-full rounded-2xl mx-auto mb-4 mt-8"
                src={bizaddFrame}
                alt="Profile Image"
              />
                
               
                </div>
    

            <div className="h-screen w-full flex flex-col bg-problem justify-center bg-cover bg-focus  gap-8">
                
                <img
                className="w-full h-full rounded-2xl mx-auto mb-4 mt-8"
                src={bizAds}
                alt="Profile Image"
              />
                
               
                </div>
    
            
            {/* <Portfolio/> */}
            
           
            

            


        </div>
    )
}
export default Designs;