import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Book from '../Book/Book';
import s from './Features.module.css';

import iconSprite from '/public/symbol-defs.svg'; 
import { selectCampers } from '../../redux/selectors';

const Features = () => {
  const { id } = useParams();


  const campers = useSelector(selectCampers);

  const currentCamper = campers.find((camper) => camper.id === id);

  if (!currentCamper) return <p>Camper not found</p>;

  const {
   
    form,
    length,
    width,
    height,
    tank,
    consumption,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    engine,
    transmission,
  } = currentCamper;


  const featureIcons = {
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
    engine: (value) => (value === "diesel" ? "icon-diesel" : "icon-petrol"),
    transmission: (value) =>
      value === "automatic" ? "icon-automatic" : "icon-manual",
  };


  const renderFeature = (featureKey, value) => {
    const icon =
      typeof featureIcons[featureKey] === "function"
        ? featureIcons[featureKey](value)
        : featureIcons[featureKey];

    if (value === true || value === false) {
      return (
        <li className={s.feature} key={featureKey}>
          <svg width="20px" height="20px" className={s.icon}>
            <use href={`${iconSprite}#${icon}`} />
          </svg>
          <p className={s.feat_title}>{featureKey}</p>
        </li>
      );
    }

    if (["diesel", "petrol", "automatic", "manual"].includes(value)) {
      return (
        <li className={s.feature} key={featureKey}>
          <svg width="20px" height="20px" className={s.icon}>
            <use href={`${iconSprite}#${icon}`} />
          </svg>
          <p className={s.feat_title}>{value}</p>
        </li>
      );
    }

    return null;
  };

  const features = {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    engine,
    transmission,
  };

  return (
    <div className={s.cont}>
      <div className={s.features}>
        <div className={s.content}>
          <ul className={s.feat}>
            {Object.keys(features).map((featureKey) =>
              renderFeature(featureKey, features[featureKey])
            )}
          </ul>

          <h2 className={s.details}>Vehicle details</h2>
          <div className={s.arrow_d}></div>
          <div className={s.cont_char}>
            <ul className={s.char}>
              <li>Form</li>
              <li>Length</li>
              <li>Width</li>
              <li>Height</li>
              <li>Tank</li>
              <li>Consumption</li>
            </ul>

            <ul className={s.values}>
              <li>{form}</li>
              <li>{length}</li>
              <li>{width}</li>
              <li>{height}</li>
              <li>{tank}</li>
              <li>{consumption}</li>
            </ul>
          </div>
        </div>
      </div>
      <Book />
    </div>
  );
};

export default Features;
