import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import List from './List/List'
import Rem from './Remove/Rem'
import Add from './Add/Add'

const App=()=> (
  
   
    <BrowserRouter>
    <Home/>
    <main>
      <Routes>
        <Route path="/Add" element={<Add/>} />
        <Route path="/List" element={<List/>} />
        <Route path="/Rem" element={<Rem/>} />
      </Routes>
    </main>
    </BrowserRouter>
  
);

export default App;
