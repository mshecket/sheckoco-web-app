import React from "react"

import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"



function SheckocoHeader() {
  return (
  <header>
    <AppBar>
      <ToolBar>
      <h3>Sheckoco Investments</h3>
      <Button className="loginButton" variant="contained" color="primary">
        Login
      </Button>
      </ToolBar>
      
    </AppBar>
  </header>
  )
};

export default SheckocoHeader