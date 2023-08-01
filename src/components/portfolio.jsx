import React from "react";
import ronex from "../assets/profile.jpg";
import menjez from "../assets/menjez.jpg";
import agai from "../assets/agai.jpg";
import oswago from "../assets/oswago.jpg";
import dun from "../assets/dun.jpg";
import {AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"


const Portfolio = () => {
  return (
    <div className="h-1/2 w-full">
      <div className="h-full w-full grid grid-cols-3 pl-10 gap-8 items-center text-green-600">
        {/* Card 1 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={ronex}
            alt="Profile Image"
          />

          <div className="text-center ">
            <h2 className="text-xl font-semibold mb-2">Ronex Ondimu</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

          <div className="mt-4 ">
 
  <div className="flex flex-row gap-4 pl-16">
    <a href="https://github.com/RonexLemon" target="blank" className="text-gray-600"><AiFillGithub/></a>
    <a href="https://ke.linkedin.com/in/ronex-ondimu" target="blank" className="text-gray-600"><AiFillLinkedin/></a>
  </div>
</div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={menjez}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">James Kariuki</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

        
          <div className="mt-4 ">
          <div className="flex flex-row gap-4 pl-16">
    <a href="https://github.com/RonexLemon" target="blank" className="text-gray-600"><AiFillGithub/></a>
    <a href="https://ke.linkedin.com/in/james-kariuki-3983b2263" target="blank" className="text-gray-600"><AiFillLinkedin/></a>
  </div>
</div>
        </div>

        {/* Center Card */}
        <div className="rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={dun}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Duncan Kimutai</h2>
            <p className="text-gray-600 text-sm mb-2">Contextual Researcher</p>
          </div>

          
          <div className="mt-4 ">
          <div className="flex flex-row gap-4 pl-16">
    <a href="https://github.com/dancankimutai" target="blank" className="text-gray-600"><AiFillGithub/></a>
    <a href="https://ke.linkedin.com/in/dancankimutai/" target="blank" className="text-gray-600"><AiFillLinkedin/></a>
  </div>
</div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={agai}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">George Agai</h2>
            <p className="text-gray-600 text-sm mb-2">Product Manager</p>
          </div>

          
          <div className="mt-4 ">
          <div className="flex flex-row gap-4 pl-16">
    <a href="https://github.com/RonexLemon" target="blank" className="text-gray-600"><AiFillGithub/></a>
    <a href="https://ke.linkedin.com/in/george-agai-a95658256" target="blank" className="text-gray-600"><AiFillLinkedin/></a>
  </div>
</div>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={oswago}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Samson Oswago</h2>
            <p className="text-gray-600 text-sm mb-2">Designer</p>
          </div>

          
          <div className="mt-4 ">
          <div className="flex flex-row gap-4 pl-16">
    <a href="https://github.com/Obanda-Oswago17" target="blank" className="text-gray-600"><AiFillGithub/></a>
    <a href="https://github.com/RonexLemon" target="blank" className="text-gray-600"><AiFillLinkedin/></a>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
