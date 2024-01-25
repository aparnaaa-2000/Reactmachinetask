import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Pie from './components/Pie';
import PieChart from './components/Pie';
import Newpie from './components/Newpie';
import Graph from './components/Graph';
import Card from './components/Card';
import Home from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/sidebar' element={<Sidebar/>}/>
   <Route path='/table' element={<Table/>}/>
   {/* <Route path='/pie' element={<Pie/>}/> */}
   {/* <Route path='/pie' element={<PieChart/>}/> */}
   <Route path='/newpie' element={<Newpie/>}/>
   <Route path='/graph' element={<Graph/>}/>
   <Route path='/card' element={<Card/>}/>
   <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
