import { useDispatch, useSelector } from 'react-redux';
import s from './CatalogCamper.module.css';
import icon from '/public/symbol-defs.svg';
import { selectCampers, selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/trailersOps';
import {  NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

const CatalogCamper = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
    const { id } = useParams();
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

    const item = campers.find(c => c.id === id);

    if (!item) return <p>Camper not found</p>;

    return (
        <div className={s.card} key={item.id}>
              <h2 className={s.name_price}>{item.name}</h2>
                <div className={s.cont_location_rating}>
                    <div className={s.cont_svg_rat}>
                        <svg width="16px" height="16px" className={s.icon_star}>
                            <use href={`${icon}#icon-star`}></use>
                        </svg>
                        <p className={s.rating_location}>
                            {item.rating} ({item.reviews.length} Reviews)
                        </p>
                    </div>
                    <div className={s.cont_svg_rat}>
                        <svg width="16px" height="16px" className={s.icon_location}>
                            <use href={`${icon}#icon-loc`}></use>
                        </svg>
                        <p className={s.rating_location}>{item.location}</p>
                    </div>
                </div>
                <h3 className={s.price_price}>€{item.price}</h3>
            <div className={s.img_cont}>
              
                {item.gallery && item.gallery.length > 0 ? (
                    item.gallery.map((photo, index) => (
                        <img
                            key={index}
                            src={photo.original || "default.jpg"}
                            alt={`Camper ${item.name} - ${index + 1}`}
                            className={s.img}
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
          
              
                <p className={s.description}>{item.description}</p>

                <ul className={s.other}>
    <li>
        <NavLink className={buildLinkClass} to="features">
            Features
        </NavLink>
    </li>
    <li>
        <NavLink className={buildLinkClass} to="review">
            Review
        </NavLink>
    </li>
</ul>
<div className={s.arrow}></div>
                <Outlet />
                
            </div>
        
    );
};

export default CatalogCamper;
