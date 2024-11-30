import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import Catalog from '../../pages/Catalog/Catalog.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import Header from '../Header/Header.jsx';
import s from './App.module.css';
import CatalogCamper from '../../pages/CatalogCamper/CatalogCamper.jsx';
import Features from '../Features/Features.jsx';
import Review from '../Review/Review.jsx';
console.log(s)
const App = () => {
  return (

    <>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/catalog/:id' element={<CatalogCamper></CatalogCamper>}>
        <Route path='features' element={<Features/>}></Route>
        <Route path='review' element={<Review/>}></Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
        </Routes> 
    </>
  )
};

export default App;
