import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// css import
import '../sidebar/sidebar.css'

// react icon import
import { CgMenuLeft } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { FiLayout } from "react-icons/fi";
import { BsDatabase } from "react-icons/bs";
import { PiCopyLight } from "react-icons/pi";
import { SlEnvolope } from "react-icons/sl";
import { BiMessage } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { PiDotsThreeCircleBold } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { HiOutlineStopCircle } from "react-icons/hi2";

const Sidebar = () => {

    const [productsclass, setProductsclass] = useState('sidebar_main');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleLine3Click = () => {
        setProductsclass(prevClass => prevClass === 'sidebar_main' ? 'sidebar_main2' : 'sidebar_main');
        setIsSidebarOpen(!isSidebarOpen);
        setIsSidebarVisible(!isSidebarVisible);
    };
    const sidebarParagraphStyle = { display: isSidebarOpen ? 'none' : 'block' };


    const sidebarIcons = [

        { icon: <FiLayout />, title: 'Layouts' },
        { icon: <FaChartLine />, title: 'Charts' },
        { icon: <BsDatabase />, title: 'Coins' },
        { icon: <PiCopyLight />, title: 'Files' },
        { icon: <SlEnvolope />, title: 'Mail' },
        { icon: <BiMessage />, title: 'Message' },
        { icon: <FiShoppingCart />, title: 'Cart' },
        { icon: <PiDotsThreeCircleBold />, title: 'Name' },
        { icon: <HiOutlineStopCircle />, title: 'Target' },
        { icon: <MdOutlineCalendarToday />, title: 'Calendar' }
    ];

    const homeIcon = [
        { icon: <TiHome />, title: 'Home' },
    ]

    return (

        <>
            <div className="sidebar">
                <div className="container">
                    <div className={`${productsclass}`}>
                        {/* sidebar icon start */}
                        <div className="menu_icon">
                            <Link onClick={handleLine3Click}>
                                <CgMenuLeft />
                            </Link>
                        </div>

                        <div className="home_icons">
                            {homeIcon.map((icon, index) => (
                                <div className={`sidebar_icon_home ${isSidebarVisible ? 'visible' : 'hidden'}`} key={index}>
                                    <Link>
                                        {icon.icon}
                                    </Link>
                                    <p style={sidebarParagraphStyle} className='sidebar_icon_title'>{icon.title}</p>
                                </div>
                            ))}

                        </div>
                        <div className={`sidebar_icons ${isSidebarVisible ? 'visible' : 'hidden'}`}>
                            {sidebarIcons.map((icon, index) => (
                                <div className="sidebar_icon" key={index}>
                                    <Link>
                                        {icon.icon}
                                    </Link>
                                    <p style={sidebarParagraphStyle} className="sidebar_icon_title">{icon.title}</p>
                                </div>
                            ))}
                        </div>
                        {/* sidebar icon end */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar