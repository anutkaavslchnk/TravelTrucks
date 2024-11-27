
import { useState } from 'react';
import s from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const [catalog, setCatalog]=useState(false);
  const navigate = useNavigate();
  const handleClick=()=>{
    setCatalog(true);
    navigate('/catalog');
  }
  return (

<section className={s.container}>
<div className={s.hero}>
<h1 className={s.title_hero}>Campers of your dreams</h1>
<p className={s.par_hero}>You can find everything you want in our catalog</p>
<button className={s.view_now} onClick={handleClick}>View now</button>
</div>
</section>


  )
};

export default Home;
