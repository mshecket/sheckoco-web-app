import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PaymentIcon from '@material-ui/icons/Payment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

function Footer() {
  return (
    <footer>
      <BottomNavigation showLabels color='primary'>
        <BottomNavigationAction label="Portfolio" icon={<BusinessCenterIcon />} />
        <BottomNavigationAction label="Stock Quotes" icon={<TrendingUpIcon />} />
        <BottomNavigationAction label="Trade" icon={<SyncAltIcon />} />
        <BottomNavigationAction label="Transfer" icon={<MonetizationOnIcon />} />
        <BottomNavigationAction label="Bill Pay" icon={<PaymentIcon />} />
      </BottomNavigation>
      <br/>
    </footer>
  );
}

export default Footer