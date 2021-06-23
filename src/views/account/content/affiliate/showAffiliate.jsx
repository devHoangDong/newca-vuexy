import React, {useState} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditLink from './EditLink';
import Profile from './Profile';
import DrawalMoney from './DrawalMoney';
import History from './History';
import HistoryDrawal from './HistoryDrawal';
import Title from '../Title';
import '../../../../../scss/showAffiliate.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ShowAffiliate = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="showAffiliate">
      <Title title="Tài khoản affiliate"/>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Link" {...a11yProps(0)} />
          <Tab label="Thông tin ngân hang" {...a11yProps(1)} />
          <Tab label="Rút tiền" {...a11yProps(2)} />
          <Tab label="Lịch sử nhận hoa hồng" {...a11yProps(3)} />
          <Tab label="Lịch sử rút tiền" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <EditLink/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Profile/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DrawalMoney/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <History/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <HistoryDrawal/>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

export default ShowAffiliate

