import React, {Component} from "react"
import Portfolio from "./Portfolio"
import StockQuotes from "./StockQuotes"
import Trade from "./Trade"
import Transfer from "./Transfer"
import BillPay from "./BillPay"

class SheckocoMainContent extends Component 
{
  constructor(props)
  {
    super(props)

  }
  render () {
    return (
      <main>
       {this.props.showPortfolio == "true" ? <Portfolio /> : null}
       {this.props.showStockQuotes == "true" ? <StockQuotes /> : null}
       {this.props.showTrade == "true" ? <Trade /> : null}
       {this.props.showTransfer == "true" ? <Transfer /> : null}
       {this.props.showBillPay == "true" ? <BillPay /> : null}
      </main>
    )
    }

}

export default SheckocoMainContent

{ /*
 <Paper>
        <h2>Please log in</h2>
          <p>Features:</p>
            <ul>
              <li>Stock quotes</li>
              <li>Bank transfers</li>
              <li>Trade stock</li>
              <li>Bill Pay</li>
              <li>Set up direct deposit</li>
              <li>Account profile</li>
            </ul>
      </Paper>

      <Paper><ul>Stuff to implement:
      <li>Portfolio</li>
    <ul><li>Summary</li>
    <li>Positions</li>
    <li>Balances</li>
    <li>Activity & Orders</li>
    <ul>
        <li>Orders</li>
        <li>Pending Transfers and Bill Payments</li>
        <li>History</li>
       <li>Analysis?</li>
       <li>Performance?</li>
       </ul></ul>
<li>Trade</li>
<li>Transfer</li>
<li>Bill Pay</li>
 <li>Statements?</li>
 <li>Statements?</li>

<li>+ Quotes</li>
<li>+ Direct Deposit</li>
      </ul>
</Paper> */ }