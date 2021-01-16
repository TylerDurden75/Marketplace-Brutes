import React from 'react';
import Header from './components/header';
import NFT from './components/NFT';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DataProvider} from './components/Data.Provider';
import Details from './components/Details';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>


          <section>
            <Routes>
              <Route path="squad" element={ <NFT/> }/>
              <Route path="squad/:id" element={ <Details/> }/>
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
