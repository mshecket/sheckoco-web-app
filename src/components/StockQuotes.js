import React from "react"

/*
  This component will contain a series of sub-components that will
  each dynamically list a stock quote--the StockQuote components themsleves
  will make API calls to the server that has the stock prices on them
  and update dynamically. We'll either do this on a interval basis or 
  set up some kind of subscription to a socket.
*/

function StockQuotes(props) 
{
  return (
    <div className="stockQuotes">
      <h1>Stock Quotes</h1>
      <p>AAA +5.3% $105.30</p>
      <p>BBB -2.3% $97.70</p>
      <p>CCC +0.3% $100.30</p>
      <p>DDD +0.1% $100.10</p>
      <p>EEE -1.3% $98.70</p>
      {/*
      <StockQuote symbol="AAA" />
      <StockQuote symbol="BBB" />
      <StockQuote symbol="CCC" />
      <StockQuote symbol="DDD" />
      <StockQuote symbol="EEE" />
      */}
    </div>
  )
}

export default StockQuotes