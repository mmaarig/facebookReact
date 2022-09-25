import { FaBell, FaSearch, FaFacebook, FaHome, FaUserFriends, FaStore, FaChessBoard, FaFacebookMessenger } from "react-icons/fa";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
// import { useState } from 'react';
// import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { BsFillMoonFill, BsSun } from "react-icons/bs";


const header = ({ toggleThemeMode, s }) => {
    return (
        <div className="header">
            <div className="hsb-1">
                <FaFacebook className="fa-3x" />
                <i className="fa-brands fa-facebook fa-3x" ></i>
            </div>
            <div className="hsb-2">
                <FaSearch className="FaSearch" />
                <input type="search" placeholder=" Search Facebook" className="hsb2-input" />
            </div>

            <div className="hsb-3 ">
                <FaHome className="hsb-3-icon" />
                <FaUserFriends className="hsb-3-icon" />
                <MdOutlinePersonalVideo className="hsb-3-icon" />
                <FaStore className="hsb-3-icon" />
                <FaChessBoard className="hsb-3-icon" />
            </div>

            <div className="hsb-4 ">


                <div className="app-icon">
                    <TbGridDots className="icon" />
                </div>

                <div className="msg-icon">
                    <FaFacebookMessenger className="icon" />
                </div>

                <div className="bell-icon">
                    <FaBell className="icon" />
                </div>

                <div type="" className="dp">
                    <img src="./imgs/dp.jpg" alt="twitter DP" width={20} />
                </div>


                <div type="" className="dp">
                    <button type="button" onClick={toggleThemeMode}>{(s === "light") ? <BsFillMoonFill className="dicon" /> : <BsSun className="dicon" />}</button>
                </div>





            </div>

        </div>
    );
}

export default header;