import React, { useState, useRef, useEffect } from "react";
import { FaImage, FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGlobalContext } from "../context";

const defaultImage = (
  <div className="default-img">
    <h1>
      <FaImage />
    </h1>
  </div>
);

const SingleShow = (show) => {
  const { id, name, genres, premiered, rating, summary, image } = show;

  const { cart, addToCart } = useGlobalContext();

  const [more, setMore] = useState(false);
  const [inCart, setInCart] = useState(false); // initial state depends on item being in cart or not - fix
  const moreContainer = useRef(null);

  useEffect(() => {
    let searchItem = cart.find((item) => item.id === id);
    if (searchItem) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, []);

  const handleMore = () => {
    moreContainer.current.innerHTML = summary;
    if (more) {
      moreContainer.current.classList.remove("show");
    } else {
      moreContainer.current.classList.add("show");
    }
    setMore(!more);
  };

  const handleCart = () => {
    setInCart(!inCart);
    addToCart(show);
  };

  return (
    <article className="single-show col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 offset-1 offset-sm-2 offset-md-3 offset-lg-1 offset-xl-2">
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
          <button
            className={`btn add-to-cart-btn ${inCart ? "in-cart" : ""}`}
            onClick={handleCart}
          >
            {inCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleShow;
