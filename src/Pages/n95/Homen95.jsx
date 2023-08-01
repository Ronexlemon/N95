import './home.css'
import homepageImage from "../../assets/homepageImage.png";
import { BsArrowUpRight } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const HomeN95 = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-screen h-full min-h-screen  " id='mainpage' style={{ display: 'flex' }}>
            <div style={{ marginRight: '60px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 178 120" fill="none">
                    <ellipse cx="52.5" rx="125.5" ry="120" fill="#FFE4E4" />
                </svg>
                <div className="header-div" style={{ marginTop: '-70px' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>N95 <BsGraphUpArrow/></h3>
                    <p>Advertise smartly</p>
                </div>
                <div className="heading-div" style={{ marginLeft: '20px' }}>
                    <h1>Reach your audience with ease and grow your business.</h1>
                </div>
                <button onClick={()=>{navigate("/advertise")}} className="start-advertising" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px' }}>Start advertising &ensp; <BsArrowUpRight /></button>
            </div>
            <div className="circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="image-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={homepageImage} alt='homeimg' />
                </div>
            </div>
        </div>
    )
}
export default HomeN95;