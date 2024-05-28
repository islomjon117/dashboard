// imort css
import '../chart_info/chart_info.css'

// import icon 
import { TbUsers } from "react-icons/tb";
import { BiRectangle } from "react-icons/bi";
import { LuClock2 } from "react-icons/lu";
import { CiWavePulse1 } from "react-icons/ci";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const ChartInfo = () => {
    return (

        <>
            <div className="chart_info">
                <div className="chart_info_main">
                    {/* chart info right start */}
                    <div className="chart_info_right">
                        <div className="chart_info_boxs">

                            {/* chart user info box start */}
                            <div className="chart_info_box">
                                <div className="user_icon_bg">
                                </div>
                                <div className="user_icon">
                                    <TbUsers />
                                </div>
                                <div className="chart_info_title">
                                    <p>Users</p>
                                </div>
                                <div className="chart_info_users">
                                    <p>72.6k</p>
                                </div>
                                <div className="chart_info_percent">
                                    <p>+25%</p>
                                </div>
                            </div>
                            {/* chart user info box end */}

                            {/* chart session info box  start*/}
                            <div className="chart_info_box">

                                <div className="session_icons">
                                </div>
                                <div className="rectangle_icon">
                                    <BiRectangle />
                                </div>
                                <div className="clock_icon">
                                    <LuClock2 />
                                </div>


                                <div className="chart_session_title">
                                    <p>Sessions</p>
                                </div>

                                <div className="chart_session_num">
                                    <p>87.2k</p>
                                </div>

                                <div className="chart_session_percent">
                                    <p>+47%</p>
                                </div>
                            </div>
                            {/* chart session info box  end*/}

                            {/* chart bounce info box start */}
                            <div className="chart_info_box">
                                <div className="wave_icon_bg">
                                </div>
                                <div className="wave_icon">
                                    <CiWavePulse1 />
                                </div>
                                <div className="chart_bounce_title">
                                    <p>Bounce Rate</p>
                                </div>

                                <div className="chart_bounce_main_percent">
                                    <p>26.3%</p>
                                </div>
                                <div className="chart_bounce_percent">
                                    <p>-28%</p>
                                </div>
                            </div>
                            {/* chart bounce info box end */}

                            {/* session duration info box  start */}
                            <div className="chart_info_box">
                                <div className="session_duration_icon_bg">
                                </div>
                                <div className="session_duration_icon">
                                    <PiClockCounterClockwiseBold />
                                </div>
                                <div className="chart_session_duration_title">
                                    <p>Session Duration</p>
                                </div>
                                <div className="chart_minutes_seconds">
                                    2m 18s
                                </div>
                                <div className="chart_session_duration_percent">
                                    +13%
                                </div>
                            </div>
                            {/* session duration info box  end */}

                        </div>
                    </div>
                    {/* chart info right end */}

                    {/* chart info left start */}
                    <div className="chart_info_left">
                        {/* session device title start*/}
                        <div className="session_device_title">
                            <p>Sessions By Device</p>
                        </div>
                        {/* session device title end*/}

                        {/*  session device subtitle start*/}
                        <div className="session_device_subtitle">
                            <p className='channel'>Channel</p>
                            <div className="traffic">
                                <p>Traffic</p>
                                <p className='persent'> (%)</p>
                            </div>
                            <p className='value'>Value</p>
                        </div>
                        {/*  session device subtitle end*/}

                        {/* session device direct 1 start*/}
                        <div className="session_device_direct_1">
                            {/* title */}
                            <div className="session_device_direct_1_title">
                                <p>Direct</p>
                            </div>
                            <div className="direct_1">
                                <div className="direct_in"></div>
                            </div>
                            {/* percent value */}
                            <div className="direct_value">
                                23.28%
                            </div>
                        </div>
                        {/* session device direct 1 end*/}

                        {/* session device direct 2 start*/}
                        <div className="session_device_direct_1">
                            {/* title */}
                            <div className="session_device_direct_1_title">
                                <p>Direct</p>
                            </div>

                            <div className="direct_1">
                                <div className="direct2_in"></div>
                            </div>

                            {/* percent value */}
                            <div className="direct_value">
                                23.28%
                            </div>
                        </div>
                        {/* session device direct 2 end*/}

                        {/* session device direct 3 start*/}
                        <div className="session_device_direct_1">
                            {/* title */}
                            <div className="session_device_direct_1_title">
                                <p>Direct</p>
                            </div>
                            <div className="direct_1">
                                <div className="direct3_in"></div>
                            </div>
                            {/* percent value */}
                            <div className="direct_value">
                                23.28%
                            </div>
                        </div>
                        {/* session device direct 3 end*/}

                    </div>
                    {/* chart info left end */}
                </div>
            </div>
        </>
    )
}

export default ChartInfo