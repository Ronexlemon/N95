import React from "react";
import Navbar from "../components/Navbar";
import Name from "../components/name";
import Portfolio from "../components/portfolio";
const Home = ()=>{
    return(
        <div className=" w-screen bg-black h-full min-h-screen ">
            <Navbar/>
            <div className="h-screen w-full flex flex-col  gap-8">
            <Name/>
            
           
            </div>
            
            <Portfolio/>
            
           
            

            


        </div>
    )
}
export default Home;