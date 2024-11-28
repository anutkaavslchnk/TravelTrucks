import svg from '/public/symbol-defs.svg';
import s from './Catalog.module.css'
const Catalog = () => {
  return (


    <section className={s.container}>

<div className={s.filter_bar}>
<p className={s.par}>Location</p>
<div className={s.input_wrapper}>
  <svg className={s.input_icon}>
    <use href={`${svg}#icon-loc`}></use>
  </svg>
  <input
    className={s.input_location}
    type="text"
    placeholder="City"
    
  />
</div>
<p className={s.par}>Filters</p>
<h2 className={s.eq_title}>Vehicle equipment</h2>
<div className={s.arrow}></div>

<div className={s.checkbox_group}>
  
<label className={s.checkbox_button}>
  <input type="checkbox" className={s.hidden_checkbox} />
  <span className={s.checkbox_content}>
    <svg className={s.checkbox_icon}>
      <use href={`${svg}#icon-ac`}></use>
    </svg>
    <span>AC</span>
  </span>
</label>

  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-automatic`}></use>
      </svg>
      <span>Automatic</span>
    </span>
  </label>


  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-kitchen`}></use>
      </svg>
      <span>Kitchen</span>
    </span>
  </label>
  
  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox} />
    <span className={s.checkbox_content}>
      <svg className={s.checkbox_icon}>
        <use href={`${svg}#icon-tv`}></use>
      </svg>
      <span>TV</span>
    </span>
  </label>
  
  <label className={s.checkbox_button}>
    <input type="checkbox" className={s.hidden_checkbox} />
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
    <input type="radio" className={s.hidden_radio} name="vehicle"/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-van`}></use>
      </svg>
      <span>Van</span>
    </span>
  </label>
  <label className={s.radio_button}>
    <input type="radio" className={s.hidden_checkbox}  name="vehicle"/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-integrated`}></use>
      </svg>
      <span>Fully <br />Integrated</span>
    </span>
  </label>


  <label className={s.radio_button}>
    <input type="radio" className={s.hidden_checkbox} name="vehicle"/>
    <span className={s.radio_content}>
      <svg className={s.radio_icon}>
        <use href={`${svg}#icon-alcove`}></use>
      </svg>
      <span>Alcove</span>
    </span>
  </label>
  
</div>
<button className={s.btn_search}>Search</button>
</div>
<div className={s.trailers}></div>

    </section>
  )
};

export default Catalog;
