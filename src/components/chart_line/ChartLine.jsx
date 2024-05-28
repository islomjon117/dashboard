// import css
import './chartline.css'
import { BsDot } from "react-icons/bs";

import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

import {
    LineChart,
    Line,
    XAxis,
} from 'recharts';





const ChartLine = () => {
    return (
        <>
            <div className="chart_line">
                <div className="chart_line_main">
                    {/* chart right start */}
                    <div className="chart_right">
                        {/*  chart title and subtitle start */}
                            <div className="chart_right_title">
                                <p className='performance'>Performance</p>
                                <p className='year1'>year</p>
                            </div>
                        {/* chart title and subtitle end */}

                        {/* chart box start */}
                        <div className="chart_right_box">
                            <p><i className='dot_icon'><BsDot /></i> current period</p>
                            <div style={{ width: '100%', marginTop: '15px', marginLeft: '2px' }}>

                                <ResponsiveContainer width="100%" height={220}>
                                    <LineChart
                                        width={500}
                                        height={200}
                                        data={data}
                                        syncId="anyId"
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 10,
                                            bottom: 0,
                                        }}
                                    >
                                        <XAxis dataKey="name" />
                                        <Line type="monotone" dataKey="uv" stroke="#563BFF" fill="#8884d8" strokeWidth={5} dot={false} filter="url(#shadow)" />
                                        <Tooltip />
                                    </LineChart>

                                </ResponsiveContainer>
                            </div>
                        </div>
                        {/* chart box end */}
                    </div>
                    {/* chart right end */}

                    {/* chart left start */}
                    <div className="chart_left">
                        <div className="chart_left_title">
                            <p className='sessions_device'>Sessions By Device</p>
                            <p className='year'>year</p>
                        </div>
                        <div className="rechart_boxs">
                            <div className="chart_left_box">
                                <ResponsiveContainer className="rechart_box" width="100%" height="100%" style={{ marginLeft: '-110px' }}>
                                    <RadialBarChart
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="10%"
                                        outerRadius="80%"
                                        barSize={10}
                                        data={data2}
                                        startAngle={90}
                                        endAngle={-270}
                                    >
                                        <RadialBar
                                            minAngle={15}
                                            background
                                            clockWise={true}
                                            dataKey="uv"
                                        />
                                    </RadialBarChart>
                                </ResponsiveContainer>

                                <div className="rechart_info_box">
                                    <div className="desktop_info">
                                        <div className="desktop_title">
                                            <p>Desktop </p>
                                        </div>
                                        <div className="desktop_persent">
                                            <p className='device_percent'>8,085 <b>13%</b></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="mobile_info">
                                        <div className="desktop_title">
                                            <p>Mobile  </p>
                                        </div>
                                        <div className="desktop_persent">
                                            <p className='device_percent'>8,085 <b>13%</b></p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="tablet_info">
                                        <div className="desktop_title">
                                            <p>Tablets   </p>
                                        </div>
                                        <div className="desktop_persent">
                                            <p className='device_percent'>8,085 <b>13%</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* chart left end */}
                </div>

            </div>
        </>
    )
}


const data2 = [
    {
        uv: 0.16,
        fill: '#20C997',
    },
    {
        uv: 0.54,
        fill: '#FF7049',
    },
    {
        uv: 0.43,
        fill: '#563BFF',
    },
];

const data = [
    {
        uv: Math.floor(Math.random() * 5000) + 1000,

    },
    {
        name: 'jan',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'feb',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'mar',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'apr',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'may',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'jun',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'jul',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'aug',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'sep',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'oct',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'nov',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'dec',
        uv: Math.floor(Math.random() * 5000) + 1000,
        pv: 4300,
        amt: 2100,
    },
];

export default ChartLine