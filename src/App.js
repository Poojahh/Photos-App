import logo from './logo.svg';
import './App.css';
import AddPhoto from './components/AddPhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPhoto from './components/SearchPhoto';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddPhoto/>}/>
    <Route path="/search" element={<SearchPhoto/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
