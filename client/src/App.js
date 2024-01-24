import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/sidebar' element={<Sidebar/>}/>
   <Route path='/table' element={<Table/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
