import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import sprite from '/public/symbol-defs.svg';

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
            


    </header>
  );
};

export default Header;
