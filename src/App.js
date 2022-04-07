import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Part from './Components/Part';
import { createContext, useState } from 'react';
import Data from './Components/Data'
import New from './New/New';
export const val = createContext(null)

function App() {
  let [data,setData] = useState(Data)
  return (
    <val.Provider value={{data}}>
      <div className="App container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/part/:type' element={<Part/>}/>
        <Route path='/new/:type/:id' element={<New/>}/>
      </Routes>
      </div>
    </val.Provider>
  );
}

export default App;
