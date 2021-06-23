import React from 'react';
import ChartOne from './chart1';
import ChartTwo from './chart2';
import Ballance from './ballance';
import '../../../scss/homePage.scss'
import TopCategory from './category';
import Order from './order';
import TopNav from './topNav';

const Home = () => {

  return (
    <div>
      <div className="homePage__container">
        <div className="chart1__container">
          <ChartOne />
        </div>
        <Ballance />
        <TopCategory />
        <Order />
        <div className="analytic__container">
          <ChartTwo />
        </div>
        {/* <div className="listItem">
        <ListItem />
      </div> */}
      </div>
    </div>
  )
}

export default Home;
