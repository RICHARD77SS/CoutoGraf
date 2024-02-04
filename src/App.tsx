import React from 'react';
import Home from './Components/home';
import GlobalStyle from './Styles/GlobalStyles';
import Jobs from './Components/jobs';
import Description from './Components/description';
import Location from './Components/location';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Jobs />
      <Description />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
