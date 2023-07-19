import React from "react";

const Navbar = ()=>{
    return(
        <div className="h-16 w-full  flex justify-around items-center text-white  border-b-2 border-white">
            <div>
                <h1>N95</h1>
            </div>
            <div className="flex justify-center items-center gap-4 text-orange-600">
                <div className=" hover:text-green-500">
                <button>Home</button> 
                </div>
                <div className=" hover:text-green-500">
                <button>Designs</button>
                </div>
                <div className=" hover:text-green-500">
                <button>Solutin</button> 
                </div>
                <div className=" hover:text-green-500">
                <button>Research</button> 
                </div>
             
                
              
              
            </div>


        </div>
    )
}
export default Navbar;