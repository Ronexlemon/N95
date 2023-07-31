import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import image1 from "../../assets/1.svg"
import image2 from "../../assets/2.svg"
import radio from "../../assets/3.svg"
import line from "../../assets/4.svg"
import vector from "../../assets/5.svg"
import Details from "./Details";


const Advertise = () => {
    const navigate= useNavigate();
    return (
        <div class="desktop">
            <div class="div">
                <div class="overlap">
                    <div className="ellipse" />
                    <img className="drawkit-vector" alt="Drawkit vector" src={image1} />
                    <div className="group">
                        <div className="overlap-group">
                            <div className="overlap-wrapper">
                                <div className="overlap-2">
                                    <div className="group-wrapper">
                                        <div className="overlap-group-wrapper">
                                            <div className="div-wrapper">
                                                <button onClick={()=>{navigate("/details")}} >
                                                    <div className="text-wrapper">Launch campaign</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="h-1">What is the purpose for your ad?</h1>
                                    <img className="line" alt="Line" src={line} />
                                </div>
                            </div>
                            <div className="group-2">

                                <input type="radio" id="radio-button" name="radio-group" />
                                <label for="radio-button">
                                    <div className="text-wrapper-2">Drive customer engagement</div>
                                    <span class="radio-circle"></span>
                                </label>
                            </div>
                            <div className="group-3">
                                <div className="text-wrapper-2">Increase online sales</div>
                                <input type="radio" id="radio-button" name="radio-group" />
                                <label for="radio-button">
                                    <span class="radio-circle"></span>
                                </label>

                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-2">Create product awareness</div>
                                <div className="group-5">
                                    <div className="text-wrapper-2">Find new customers</div>
                                    <input type="radio" id="radio-button" name="radio-group" />
                                    <label for="radio-button">
                                        <span class="radio-circle"></span>
                                    </label>

                                </div>
                                <input type="radio" id="radio-button" name="radio-group" />
                                <label for="radio-button">
                                    <span class="radio-circle"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <img className="vector" alt="Vector" src={vector} />
                </div>
                <img className="drawkit-vector-2" alt="Drawkit vector" src={image2} />
            </div>
        </div>
    );
}
export default Advertise;