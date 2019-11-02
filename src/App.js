import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

/*
  This is our main app container. It has three components inside: a header
  that just has some branding and a login button, a main content area
  that will change depending on which function the user is working on at
  the time, and a footer with bottom navigation buttons to go to the
  different screens.
*/

function App() {
  return (
    <div>
      <Header />
      <br/>
      <MainContent
        showStockQuotes={"true"}
      />
      <br/>
      <Footer />
    </div>
  );
}

export default App