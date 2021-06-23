import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import ChartOne from './home/chart1.jsx'
import Ballance from './home/ballance.jsx'
import ChartTwo from './home/chart2.jsx'
import TopCategory from './home/category.jsx'
import Order from './home/order.jsx'
import '../assets/scss/homePage.scss'
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state) => state.auth.login)
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

export default Home
