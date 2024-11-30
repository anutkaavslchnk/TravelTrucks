import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Book from "../Book/Book";
import icon from "/public/symbol-defs.svg";
import s from "./Review.module.css";

import { selectCampers } from "../../redux/selectors";

const Review = () => {
  const { id } = useParams();

  const campers = useSelector(selectCampers);

  const currentCamper = campers.find((camper) => camper.id === id);


  if (!currentCamper) return <p>Camper not found</p>;

  const { reviews } = currentCamper;

  return (
    <div className={s.cont}>
      <div className={s.flex}>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className={s.review}>
            <div className={s.cont_stars_icon}>
              <div className={s.icon_circle}>{review.reviewer_name[0].toUpperCase()}</div>
              <div className={s.cont_name_rating}>
                <p className={s.name}>{review.reviewer_name}</p>
                
                <ul className={s.list}>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <svg
                        width="16px"
                        height="16px"
                        className={s.star}
                        style={{
                          fill: i < review.reviewer_rating ? "#FFD700" : "#D3D3D3", 
                        }}
                      >
                        <use href={`${icon}#icon-star`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </div>
          
        ))
      )}
</div>
      <Book />
    </div>
  );
};

export default Review;
