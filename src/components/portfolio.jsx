import React from "react";
import ronex from "../assets/profile.jpg";
import menjez from "../assets/menjez.jpg";

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

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Ronex Ondimu</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Job Done:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Project A</li>
              <li className="text-gray-600">Project B</li>
              <li className="text-gray-600">Project C</li>
            </ul>
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

          <div className="mt-4">
            <p className="text-gray-800">Job Done:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Project A</li>
              <li className="text-gray-600">Project B</li>
              <li className="text-gray-600">Project C</li>
            </ul>
          </div>
        </div>

        {/* Center Card */}
        <div className="rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={ronex}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Duncan Kimutai</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Job Done:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Project A</li>
              <li className="text-gray-600">Project B</li>
              <li className="text-gray-600">Project C</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={ronex}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">George Agai</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Job Done:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Project A</li>
              <li className="text-gray-600">Project B</li>
              <li className="text-gray-600">Project C</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-lg shadow-md p-4 w-64">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={ronex}
            alt="Profile Image"
          />

          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Samson Oswago</h2>
            <p className="text-gray-600 text-sm mb-2">Software Engineer</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">Job Done:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Project A</li>
              <li className="text-gray-600">Project B</li>
              <li className="text-gray-600">Project C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
