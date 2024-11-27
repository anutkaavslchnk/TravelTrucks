import { NavLink, Route, Routes } from 'react-router-dom';
import s from './Header.module.css'
import sprite from '/public/symbol-defs.svg';
import Home from '../../pages/Home/Home.jsx';
import Catalog from '../../pages/Catalog/Catalog.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import clsx from 'clsx';
console.log(s);

const Header = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
  return (
    <header className={s.header}>
        <div className={s.container}>
        <a href="/">
    <svg width='135px' height='16px'>
        <use href={`${sprite}#logo`}></use>
    </svg>

</a>


<nav className={s.pages}>
    <NavLink to='/' className={buildLinkClass}>Home</NavLink>
    <NavLink to='/catalog' className={buildLinkClass}>Catalog</NavLink>

</nav>

        </div>
            
<Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path="*" element={<NotFound />} />
        </Routes> 

    </header>
  );
};

export default Header;
