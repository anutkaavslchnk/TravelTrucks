import { useDispatch, useSelector } from "react-redux";
import s from './Trailers.module.css'
import icon from '/public/symbol-defs.svg'
import { useEffect } from "react";
import { selectCampers, selectError, selectFilter, selectIsLoading } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { fetchCampers } from "../../redux/trailersOps";
import { toggleHeart } from "../../redux/heartSlice";
import { selectFilteredTrailers } from "../../redux/trailersSlice";

const Trailers = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);


  const filteredTrailers = useSelector(selectFilteredTrailers);


  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const currentPage = useSelector(state => state.vehicles.currentPage);
  const hasMore = useSelector(state => state.vehicles.hasMore);

  const hearts = useSelector((state) => state.heart.hearts);

  const handleHeartClick = (itemId) => {
    dispatch(toggleHeart({ itemId }));
  }
  useEffect(() => {
    dispatch(fetchCampers(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    if (hasMore) {
      dispatch(fetchCampers(currentPage + 1)); 
    }
  };

  if (isLoading) {
    return <p>Loading campers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const featuresMap = {
    AC: { icon: "icon-ac", label: "AC" },
    kitchen: { icon: "icon-kitchen", label: "Kitchen" },
    TV: { icon: "icon-tv", label: "TV" },
    transmission: {
      featureIcon: (value) => (value=="manual" ? 'icon-manual' : "icon-automatic" ),
      label: (value) => (value === "manual" ? 'Manual' : 'Automatic'), 
    },
  }

  return (
    <div className={s.trailers_container}>
      <ul className={s.list}>
        
      {filteredTrailers.length === 0 ? <h2>No trailers here</h2> : filteredTrailers.map((item) => (
          <li key={item.id} className={s.card}>
            <div className={s.img_cont}>
              <img src={item.gallery[0]?.thumb || "default.jpg"} alt={item.name} className={s.img} />
            </div>
            <div className={s.info}>
                <div className={s.cont_price_name}>
                  <h2 className={s.name_price}>{item.name}</h2>
                  <div className={s.cont_heart_price}>
                  <h3 className={s.price_price}>€{item.price.toFixed(2)}</h3>
                  <button className={s.btn_heart} onClick={() => handleHeartClick(item.id)}>
                <svg
                  className={`${s.heart} ${hearts[item.id] ? s.clicked : ''}`}
                  width="24px"
                  height="21px"
                >
                  <use href={`${icon}#icon-heart`}></use>
                </svg>
              </button>
                  </div>
                 

                </div>
             
              <div className={s.cont_location_rating}>
                <div className={s.cont_svg_rat}>
                  <svg width="16px" height="16px" className={s.icon_star}><use href={`${icon}#icon-star`}></use></svg>
                  <p className={s.rating_location}>{item.rating} ({item.reviews.length} Reviews)</p>
                </div>
              
                <div className={s.cont_svg_rat}>
                  <svg width="16px" height="16px" className={s.icon_location}>
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
                    const featureIcon = featuresMap[featureKey].featureIcon(featureValue);
                    const label = featuresMap[featureKey].label(featureValue);

                    return (
                      <li className={s.feature} key={featureKey}>
                        <svg width="20px" height="20px" className={s.icon}>
                          <use href={`${icon}#${featureIcon}`}></use>
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
      {hasMore && !isLoading && (
        <div className={s.cont_btn}>
           <button onClick={handleLoadMore} className={s.load_more_btn}>Load More</button>
        </div>
       
      )}
    </div>
  );
};

export default Trailers;
