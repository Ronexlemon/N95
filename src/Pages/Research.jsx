import React from "react";
import Navbar from "../components/Navbar";
import Name from "../components/name";
import Portfolio from "../components/portfolio";
import Problem from "../components/problem";
const Research = ()=>{
    return(
        <div className=" w-screen bg-black h-full min-h-screen ">
            <Navbar/>
            <div className="h-screen w-full flex flex-col bg-hci bg-cover bg-focus  gap-8">
            <Name/>
            
           
            </div>
            <div className="h-screen w-full flex flex-col bg-problem justify-center bg-cover bg-focus  gap-8">
            <div className="text-white flex flex-row  justify-center animate-bounce">
            <h1>PROBLEM</h1>
        </div>

            <Problem/>
            
           
            </div>

            
            <Portfolio/>
            
           
            

            


        </div>
    )
}
export default Research;