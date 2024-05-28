// import css
import '../circle_chart/circle_chart.css'

const CircleChart = () => {
  return (
    <>
      <div className="circle_chart">
        <div className="container">
          <div className="circle_chart_main">

            {/* daily overview info start*/}
            <div className="daily_overview_info">
              <div className="daily_overview_info_title_btn">
                {/* title */}
                <p>Daily Overview</p>
                {/* button */}
                <button>Export</button>
              </div>

              <div className="daily_overview_info_boxs_main">
                {/* daily overview info boxs start */}
                <div className="daily_overview_info_boxs">
                  {/* daily overview info box 1 start */}
                  <div className="daily_overview_info_box1">
                    {/* todays user */}
                    <div className="todays_user">
                      <p className='number_of_users'>5,461 </p>
                      <p className='today'>Today</p>
                    </div>

                    {/* circle chart start */}
                    <div className="box_1">
                      <div className="box_in"></div>
                      <div className="box_2">
                        <p>User</p>
                      </div>
                    </div>
                    {/* circle chart end */}

                    {/* expected user */}
                    <div className="expected_user">
                      <p className='expected_of_users'>8,085 </p>
                      <p className='expected'>Expected</p>
                    </div>
                  </div>
                  {/* daily overview info box 1 end */}

                  {/* daily overview info box 2 start */}
                  <div className="daily_overview_info_box1 daily_overview_info_box2">
                    {/* todays user */}
                    <div className="todays_user">
                      <p className='number_of_users'>140</p>
                      <p className='today'>Today</p>
                    </div>

                    {/* circle chart start */}
                    <div className="box1">
                      <div className="box_in"></div>
                      <div className="box2">
                        <p className='goals'>GOALS</p>
                      </div>
                    </div>
                    {/* circle chart end */}

                    {/* expected user */}
                    <div className="expected_user">
                      <p className='expected_of_users'>120</p>
                      <p className='expected'>Expected</p>
                    </div>
                  </div>
                  {/* daily overview info box 2 end */}
                </div>
                {/* daily overview info boxs end */}

                <div className="sessions_device_button">
                  <div className="sessions_device_btn_title">
                    <p>Sessions By Device</p>
                    <p className='top_region'>Top Region & session</p>
                  </div>
                  <div className="sessions_device_btn">
                    <button>View</button>
                  </div>
                </div>
              </div>



            </div>
            {/* daily overview info end*/}

          </div>
        </div>
      </div>
    </>
  )
}

export default CircleChart