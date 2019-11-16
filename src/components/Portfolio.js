import React from "react"

/*
  This component will display a series of positions for this user, including
  a cash position, as well as a total for the whole portfolio. The individual
  positions will update dynamically from the server that has the account
  information, and stock positions will also dynamically update stock prices
  from the stock price server.
*/

function Portfolio(props) 
{
  return (
    <div>
      Portfolio
      {/*
      <Position />
      <Position />
      <Position />
      <Total />
      */}
      <p>100 shares of AAA at $10 = $1000</p>
      <p>100 shares of BBB at $20 = $2000</p>
      <p>100 shares of CCC at $30 = $3000</p>
      <p>100 shares of DDD at $40 = $4000</p>
      <p>100 shares of EEE at $50 = $5000</p>
    </div>
  );
}

export default Portfolio