import React from "react"

/*
  This component will, in part, contain a form that will let the user
  decide what kind of order they want to place. They will enter a stock symbol
  they want to trade, whether to buy or sell, how many shares, and maybe at
  some point implement limit/stop loss orders and other stuff like that.

  There should also be a list of orders that have been placed but not filled
  yet (with the option to cancel them), and a list of completed or cancelled orders.
*/

function Trade(props) 
{
  return (
    <div className="trade">
      <h1>Trade</h1>
    </div>
  );
}

export default Trade