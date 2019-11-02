/*
  This component will let the user set up bill payment to pretend
  payees. There will be a list of payees, probably with some default ones,
  options to add or remove payees or change their information, and then
  a form to let the user set up a bill payment. The form will ask them for
  the payment amount, date they want it sent, and have them choose
  a receipient from the list. This won't connect to a real server--we'll
  just have toy payees to play around with.
*/

import React from "react"

function BillPay(props) 
{
  return (
    <div>
      Bill Pay
    </div>
  );
}

export default BillPay