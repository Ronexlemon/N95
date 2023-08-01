import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <div className="h-16 w-full  flex justify-around items-center  text-white  border-b-2 border-white ">
            <div className="text-4xl">
                <h1>N95 LTD COMPANY</h1>
            </div>
            <div className="flex justify-center items-center gap-4 text-orange-600">
                <div className=" hover:text-green-500">
                <button onClick={()=>{navigate("/home")}}>Home</button> 
                </div>
                <div className=" hover:text-green-500">
                <button onClick={()=>{navigate("/designs")}}>Designs</button>
                </div>
                <div className=" hover:text-green-500">
                <button onClick={()=>{navigate("/solution")}}>Solution</button> 
                </div>
                <div className=" hover:text-green-500">
                {/* <button onClick={()=>{navigate("/research")}}>Research</button> */}
                <a href="https://www.canva.com/design/DAFpi53a9G0/tnvQXIp1OOzXIdvuO1iCbw/edit?utm_content=DAFpi53a9G0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank">Presentation</a> 
                </div>
             
                
              
              
            </div>


        </div>
    )
}
export default Navbar;