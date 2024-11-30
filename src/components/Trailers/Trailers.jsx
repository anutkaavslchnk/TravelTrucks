
import { useDispatch, useSelector } from "react-redux";
import s from './Trailers.module.css'
import icon from '/public/symbol-defs.svg'
import { useEffect } from "react";
import { selectCampers, selectError, selectIsLoading } from "../../redux/selectors";
import { fetchCampers } from "../../redux/trailersOps";
import { Link } from "react-router-dom";

const Trailers = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading campers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const featuresMap = {
    AC: { icon: "icon-ac", label: "AC" },
    bathroom: { icon: "icon-bathroom", label: "Bathroom" },
    kitchen: { icon: "icon-kitchen", label: "Kitchen" },
    TV: { icon: "icon-tv", label: "TV" },
    transmission: {
      icon: (value) => "icon-automatic",
      label: (value) => (value === "manual" ? null : value.charAt(0).toUpperCase() + value.slice(1)), 
    },
  }
  return (
    <div className={s.trailers_container}>
      <ul className={s.list}>
        {campers.map((item) => (
          <li key={item.id} className={s.card}>
            <div className={s.img_cont} >
              <img src={item.gallery[0]?.thumb || "default.jpg"} alt={item.name} className={s.img} />
            </div>
            <div className={s.info}>
                <div className={s.cont_price_name}>

                <h2 className={s.name_price}>{item.name}</h2>
                <h3 className={s.price_price}>€{item.price}</h3>
                </div>
             
              <div className={s.cont_location_rating}>
                <div className={s.cont_svg_rat}>
                  <svg width="16px" height="16px" className={s.icon_star}><use href={`${icon}#icon-star`}></use></svg>
                <p className={s.rating_location}>{item.rating} ({item.reviews.length} Reviews)</p>
                </div>
              
                <div className={s.cont_svg_rat}>
                <svg  width="16px" height="16px" className={s.icon_location}>
        <use href={`${icon}#icon-loc`}></use>
      </svg>
                  <p className={s.rating_location}>{item.location}</p>
                </div>
                
              </div>
              <p className={s.description}>{item.description}</p>
              <ul className={s.features}>
  {Object.keys(featuresMap).map((featureKey) => {
    const featureValue = item[featureKey];

    if (featureValue === undefined || featureValue === null) return null;

    if (featureKey === "transmission") {
      const icon = featuresMap[featureKey].icon(featureValue.toLowerCase());
      const label = featuresMap[featureKey].label(featureValue.toLowerCase());

      return (
        <li className={s.feature} key={featureKey}>
          <svg width="20px" height="20px" className={s.icon}>
            <use href={`${icon}#${icon}`}></use>
          </svg>
          {label && <p className={s.feat_title}>{label}</p>}
        </li>
      );
    }

    return (
      <li className={s.feature} key={featureKey}>
        <svg width="20px" height="20px" className={s.icon}>
          <use href={`${icon}#${featuresMap[featureKey].icon}`}></use>
        </svg>
        <p className={s.feat_title}>{featuresMap[featureKey].label}</p>
      </li>
    );
  })}
</ul>
<Link to={`/catalog/${item.id}`} className={s.trailer_btn}>Show more</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trailers;
