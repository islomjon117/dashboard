// import react router dom
import { Route, Routes } from "react-router-dom"

// import components
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import ChartLine from "../components/chart_line/ChartLine"
import CircleChart from "../components/circle_chart/CircleChart"
import ChartInfo from "../components/chart_info/ChartInfo"


const MainLayout = () => {
    return (
        <>
            <div className="sidebar_and_navbar container">
                <Sidebar />
                <Navbar />

                <div className="chart_header">
                    <ChartLine />
                    <ChartInfo/>
                    <CircleChart />
                </div>
            </div>


            {/* <Routes>
                  <Route />
                </Routes> 
            */}
        </>
    )
}

export default MainLayout