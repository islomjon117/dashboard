// css import
import '../navbar/navbar.css'

// react icon import
import { FiSearch } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { MdNotificationsNone } from "react-icons/md";

// image import
import user_img from '../../assets/user_img/user_img.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_main">

          {/* navbar right start */}
          <div className="navbar_right">
            {/* navbar search start */}
            <div className="navbar_search">
              <div className="search_icon">
                <FiSearch />
              </div>
              <input type="text" placeholder='search anything' />
            </div>
            {/* navbar search end */}
          </div>
          {/* navbar right end */}

          {/* navbar left start */}
          <div className="navbar_left">
            <div className="nav_left_message_icon">
              <SlEnvolope />
            </div>
            <div className="nav_left_notification">
              <MdNotificationsNone />
              <div className="notification_count">
                <p>
                  5
                </p>
              </div>
            </div>
            <div className="user_img">
              <img src={user_img} alt="" />
            </div>
          </div>
          {/* navbar left end */}
        </div>
      </div>
    </div>

  )
}

export default Navbar