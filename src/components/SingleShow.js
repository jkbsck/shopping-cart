import React, { useState, useRef } from "react";
import { FaImage, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const defaultImage = (
  <div className="default-img">
    <h1>
      <FaImage />
    </h1>
  </div>
);

const SingleShow = ({ name, genres, premiered, rating, summary, image }) => {
  const [more, setMore] = useState(false);
  const moreContainer = useRef(null);

  const handleMore = () => {
    moreContainer.current.innerHTML = summary;
    if (more) {
      moreContainer.current.classList.remove("show");
    } else {
      moreContainer.current.classList.add("show");
    }
    setMore(!more);
  };

  return (
    <article className="single-show col-9 offset-1">
      <div className="img-wrapper">
        {image ? <img src={image} alt={name} /> : defaultImage}
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
      <div className="more-content" ref={moreContainer}></div>
      <div className="actions-wrapper">
        <div className="more" onClick={handleMore}>
          {more ? (
            <>
              <span>Less Info</span>
              <IoIosArrowUp className="arrow" />
            </>
          ) : (
            <>
              <span>More Info</span>
              <IoIosArrowDown className="arrow" />
            </>
          )}
        </div>
        <div className="add-to-cart">
          <button className="btn add-to-cart-btn">Add To Cart</button>
        </div>
      </div>
    </article>
  );
};

export default SingleShow;
