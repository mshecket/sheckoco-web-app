import React from "react"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar/Toolbar"
import RaisedButton from "material-ui/RaisedButton"

function SheckocoHeader() {
  return (
  <header>
      <h1>Sheckoco Investments</h1>
      <MuiThemeProvider>
        <AppBar>
          
           <RaisedButton color="inherit" primary={true}>Login</RaisedButton>
      
        </AppBar>
      </MuiThemeProvider>
  </header>
  )
};

export default SheckocoHeader