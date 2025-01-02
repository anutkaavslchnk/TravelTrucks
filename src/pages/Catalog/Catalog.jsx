import svg from '/public/symbol-defs.svg';
import s from './Catalog.module.css'
import Trailers from '../../components/Trailers/Trailers';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { useState } from 'react';
import { selectCampers } from '../../redux/selectors';
const Catalog = () => {
  const dispatch=useDispatch()
  const [location, setLocation] = useState('');
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [bathroom, setBathroom] = useState(false);
  const [vehicleType, setVehicleType] = useState('');
  const campers = useSelector(selectCampers);
const handleSearch = () => {
  dispatch(changeFilter({
    location,
    ac,
    kitchen,
    tv,
    bathroom,
    automatic,
    type: vehicleType,
  }));
};

  return (


    <section className={s.container}>

<div className={s.filter_bar}>
<p className={s.par}>Location</p>
<div className={s.input_wrapper}>
  <svg className={s.input_icon}>
    <use href={`${svg}#icon-loc`}></use>
  </svg>
  <select 
  name="location" 
  id="location" 
  value={location} 
  onChange={(e) => setLocation(e.target.value)} 
  className={s.input_location}
>
  <option value="" disabled>
  City
  </option>
 
    <option  value="Ukraine, Kyiv">
    Ukraine, Kyiv
    </option>
    <option  value="Ukraine, Dnipro">
    Ukraine, Dnipro
    </option>
    <option  value="Ukraine, Poltava">
    Ukraine, Poltava
    </option>
    <option  value="Ukraine, Odessa">
    Ukraine, Odesa
    </option>
    <option  value="Ukraine, Kharkiv">
    Ukraine, Kharkiv
    </option>
    <option  value="Ukraine, Sumy">
    Ukraine, Sumy
    </option>
    <option  value="Ukraine, Lviv">
    Ukraine, Lviv
    </option>
</select>
</div>
<p className={s.par}>Filters</p>
<h2 className={s.eq_title}>Vehicle equipment</h2>
<div className={s.arrow}></div>

<div className={s.checkbox_group}>
  
<label className={s.checkbox_button}>
  <input type="checkbox" className={s.hidden_checkbox} checked={ac}  onChange={(e) => setAc(e.target.checked)}/>
  <span className={s.checkbox_content}>
    <svg className={s.checkbox_icon}>
      <use href={`${svg}#icon-ac`}></use>
    </svg>
    <span>AC</span>
  </span>
</label>

  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox} checked={automatic} onChange={(e)=>setAutomatic(e.target.checked)} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-automatic`}></use>
      </svg>
      <span>Automatic</span>
    </span>
  </label>


  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox}  checked={kitchen}  onChange={(e) => setKitchen(e.target.checked)}/>
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-kitchen`}></use>
      </svg>
      <span>Kitchen</span>
    </span>
  </label>
  
  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox}  checked={tv}  onChange={(e) => setTv(e.target.checked)} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-tv`}></use>
      </svg>
      <span>TV</span>
    </span>
  </label>
  
  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox}  checked={bathroom}  onChange={(e) => setBathroom(e.target.checked)} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-bathroom`}></use>
      </svg>
      <span>Bathroom</span>
    </span>
  </label>
</div>
<h2 className={s.eq_title}>Vehicle type</h2>
<div className={s.arrow}></div>

<div className={s.radio_group}>
  
  <label className={s.radio_button} >
    <input type="radio" className={s.hidden_radio} name="vehicle"  value="panelTruck" checked={vehicleType === 'panelTruck'}
              onChange={(e) => setVehicleType(e.target.value)}/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-van`}></use>
      </svg>
      <span>Van</span>
    </span>
  </label>
  <label className={s.radio_button}>
    <input type="radio" className={s.hidden_checkbox}  name="vehicle" value="fullyIntegrated"
              checked={vehicleType === 'fullyIntegrated'}
              onChange={(e) => setVehicleType(e.target.value)}/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-integrated`}></use>
      </svg>
      <span>Fully <br />Integrated</span>
    </span>
  </label>


  <label className={s.radio_button}>
    <input type="radio" className={s.hidden_checkbox} name="vehicle" value="alcove"
              checked={vehicleType === 'alcove'}
              onChange={(e) => setVehicleType(e.target.value)}/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-alcove`}></use>
      </svg>
      <span>Alcove</span>
    </span>
  </label>
  
</div>
<button onClick={handleSearch} className={s.btn_search}>Search</button>
</div>
<div className={s.trailers}></div>
<Trailers></Trailers>
    </section>
  )
};

export default Catalog;
