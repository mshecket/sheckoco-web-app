import React from "react"

import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import HelpIcon from "@material-ui/icons/Help"


function SheckocoHeader() {
  return (
  <header>
    <AppBar>
      <ToolBar>
      <IconButton><MenuIcon /></IconButton>
      <h3>Sheckoco Investments</h3>
      <IconButton><HelpIcon /> </IconButton>
      <Button variant="contained" color="primary">
        Login
      </Button>
      </ToolBar>
      
    </AppBar>
  </header>
  )
};

export default SheckocoHeader