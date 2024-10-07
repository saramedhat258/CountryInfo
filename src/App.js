import './App.css';
import { useState } from 'react';
import CountryDetail from './components/CountryDetail';
import MainPage from './components/MainPage';
import MainPagee from './components light/MainPagelight';
import CountryDetaillight from './components light/CountryDetaillight';
import { Route,Routes } from 'react-router-dom';
import Bordercountry from './components/Bordercountry';
import Bordercountryli from './components light/Bordercountryli';
function App() {
  const [toggle,settoggle]=useState(true)
  return (
    <div className="App">
      <Routes>
        {toggle?
        <><Route path='/countryinfo' element={<MainPage settoggle={settoggle} toggle={toggle} />} />
        <Route path='/name/:country' element={<CountryDetail settoggle={settoggle} toggle={toggle}/>} />
        <Route path='/name/:country/:border' element={<Bordercountry settoggle={settoggle} toggle={toggle}/>} />
        </>
        
        :
        <><Route path='/countryinfo' element={<MainPagee settoggle={settoggle} toggle={toggle}/>} />
        <Route path='/name/:country' element={<CountryDetaillight settoggle={settoggle} toggle={toggle}/>} />
        <Route path='/name/:country/:border' element={<Bordercountryli settoggle={settoggle} toggle={toggle}/>} />
        </>
        
      }

      </Routes>
      
    </div>
  );
}

export default App;
