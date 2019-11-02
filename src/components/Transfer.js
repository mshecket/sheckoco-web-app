import React from "react"

/*
  This component will allow the user to transfer cash to or from
  their investment account. We'll probably just use toy sources or
  destinations for transfers and not have it connected to a server.

  The user will choose an amount of cash, whether they are withdrawing
  or depositing, and a source/destination for the money. So we'll need
  a simple form for that. We don't even necessarily have to display the
  balances for the external accounts--in a real app, you wouldn't necessarily
  see those anyway.
*/

function Transfer(props) 
{
  return (
    <div className="transfer">
      <h1>Transfer</h1>
    </div>
  );
}

export default Transfer