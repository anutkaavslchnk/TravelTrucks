import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import Catalog from '../../pages/Catalog/Catalog.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Header from '../Header/Header.jsx';
import s from './App.module.css';
console.log(s)
const App = () => {
  return (

    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path="*" element={<NotFound />} />
        </Routes> 
    </>
  )
};

export default App;
