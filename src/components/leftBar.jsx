import { FaDizzy, FaUserFriends, FaStore, FaHistory, FaCaretDown } from "react-icons/fa";
import { MdGroups, MdOutlinePersonalVideo } from "react-icons/md";
const leftBar = () => {
    return (
        <div className="bsb-1">

            <div type="" className="sdp">
                <img src="./imgs/dp.jpg" alt="" className="" width={40} />
                <p>Maarig</p>
            </div>

            <div type="" className="f-icon">
                <FaUserFriends className="icon" />
                <p> Friends</p>
            </div>

            <div type="" className="g-icon">
                <MdGroups className="icon" />
                <p> Groups</p>
            </div>

            <div type="" className="mart-icon">
                <FaStore className="icon" />
                <p>Marketplace</p>
            </div>

            <div type="" className="watch-icon">
                <MdOutlinePersonalVideo className="icon" />
                <p>Watch</p>
            </div>

            <div type="" className="memorie-icon">
                <FaHistory className="icon" />
                <p>Memories</p>
            </div>

            <div type="" className="see-icon">
                <FaCaretDown className="icon" />
                <p>See More</p>
            </div>

            <br />
            {/* <hr/> */}

            <p>Your shortcuts</p>

            <div type="" className="bowling-icon">
                <img src="./imgs/bowling-icon28x28.png" alt="" className="" />
                <p>Pro Bowling</p>
            </div>

            <div type="" className="omg-icon">
                <FaDizzy className="omg" />
                <p>OMG</p>
            </div>

            <div type="" className="bowling-icon">
                <img src="./imgs/8poll-icon_28x28.png" alt="" className="" />
                <p>8 Ball Poll</p>
            </div>

            <div type="" className="bowling-icon">
                <img src="./imgs/job_28x28.jpg" alt="" className="" />
                <p>Job Portal</p>
            </div>
        </div>
    );
}

export default leftBar;