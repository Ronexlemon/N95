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
import landingPage from "../assets/landingpage.png"
import purpose from "../assets/purpose.png"
import wireframe1 from "../assets/wireframe1.jpg"
import wireframe2 from "../assets/wireframe2.jpg"
import business from "../assets/business.png"


const Designs = ()=>{
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    return(
        <div className=" w-screen bg-black h-full min-h-screen ">
            <Navbar/>
            <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={storyboard}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>StoryBoard</h2>
            </div>
              
             
              </div>
              <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={wireframe}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>WireFrame 1</h2>
            </div>
              
             
              </div>
              <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={wireframe1}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>Alternative</h2>
            </div>
              
             
              </div>
              <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={wireframe2}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>Alternative</h2>
            </div>
              
             
              </div>


    

            <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
                <img
                className="w-3/4 h-full rounded-2xl  "
                src={landingPage}
                alt="Profile Image"
              />

<div className="text-4xl text-orange-400" >
                <h2>Landing Page</h2>
              </div>
                
               
                </div>

            <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={purpose}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>Purpose Page</h2>
            </div>
              
             
              </div>
              
              <div className="h-screen w-full flex flex-row bg-problem justify-center items-center bg-cover bg-focus text-white  ">
              
                
              <img
              className="w-3/4 h-full rounded-2xl  "
              src={business}
              alt="Profile Image"
            />

<div className="text-4xl text-orange-400" >
              <h2>Business Page</h2>
            </div>
              
             
              </div>
    
            
            {/* <Portfolio/> */}
            
           
            

            


        </div>
    )
}
export default Designs;