import React from "react";
import { FaImage, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const defaultImage = (
  <div className="default-img">
    <h1>
      <FaImage />
    </h1>
  </div>
);

const SingleShow = ({ name, genres, premiered, rating, summary, image }) => {
  return (
    <article className="single-show col-9 offset-1">
      <div className="img-wrapper">
        {image ? <img src={image} alt={name} /> : defaultImage}
        {/* {defaultImage} */}
      </div>
      <div className="info-wrapper">
        <h2 className="title col-8">{name}</h2>
        <span className="rating col-4">
          <FaStar className="star" />{" "}
          {rating ? `${rating.average ? rating.average : "-"}/10` : "-"}
        </span>
        <span className="genres col-6">
          genres: <h6>{genres.join(", ")}</h6>
        </span>
        <span className="premiered col-6">
          premiered: <h6>{premiered}</h6>
        </span>
      </div>
      <div className="actions-wrapper">
        <div className="more">
          <span>More Info</span>
          <IoIosArrowDown className="arrow" />
        </div>
        <div className="add-to-cart">
          <button className="btn add-to-cart-btn">Add To Cart</button>
        </div>
      </div>
    </article>
  );
};

export default SingleShow;
