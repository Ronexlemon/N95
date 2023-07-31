import React from "react";
import detailImage from "../../assets/draw.svg";

const Details = ()=>{
    return(
        <div className=" w-screen bg-black h-screen ">
            <div className="h-full w-full grid grid-cols-3">
                <div className=" bg-gray-100  columns-1 h-full">
                    <div className="h-full w-full justify-center items-center flex ">
                        <img className="h-3/4 w-full" src={detailImage} alt="Image"/>
                    </div>

                </div>
                <div className="  col-span-2 h-full w-full bg-white flex justify-center items-center">
                    
                <div class="rounded-lg border border-gray-300 bg-white shadow-md p-4 h-3/4 w-1/2">
  <h2 class="text-xl font-semibold mb-4">Please enter the following details</h2>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col items-center gap-2">
      <label for="business" className="w-full">Business</label>
      <select id="business" name="business" className="flex-1 border w-full border-gray-300 rounded-md p-2">
        
        <option value="option1">Salon</option>
        <option value="option2">Restaurant</option>
        <option value="option2">Bookstore</option>
       
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <label for="business" className="w-full">Audience</label>
      <select id="business" name="business" className="flex-1 border w-full border-gray-300 rounded-md p-2">
        
        <option value="option1">Ladies</option>
        <option value="option2">Men</option>
        <option value="option2">Children</option>
       
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <label for="location" className="w-full">Location</label>
      <select id="location" name="location" className="flex-1 border w-full border-gray-300 rounded-md p-2">
        
        <option value="option1">Juja</option>
        <option value="option2">Kahawa</option>
        <option value="option2">Ngara</option>
       
      </select>
    </div>
    <div class="flex flex-col items-center gap-2">
      <label for="budget" className="w-full">Budget</label>
      <input id="budget" name="business" placeholder="100000" className="flex-1 border w-full border-gray-300 rounded-md p-2"/>
        
       
    </div>
    <div class="flex  justify-around items-center ">
    <div class="rounded-xl border  text-center border-blue-300 h-10 w-24 flex items-center justify-center">
  <button class="text-blue-400">Cancel</button>
</div>
        
        <div class="rounded-xl bg-indigo-600 h-10 w-24 flex items-center justify-center">
  <button class="text-white">Next</button>
</div>
     
        
       
    </div>

  </div>
</div>

                </div>

            </div>
           
            

            


        </div>
    )
}
export default Details;