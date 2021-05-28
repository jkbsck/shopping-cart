import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../context";

const Shop = () => {
  const { setSearchTerm, shows, loading } = useGlobalContext();
  const searchValue = useRef("");

  const handleSearch = () => {
    setSearchTerm(searchValue.current.value);
  };
  console.log(shows);
  return (
    <section className="shop">
      <div className="form-wrapper">
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            id="search"
            name="search"
            ref={searchValue}
            onChange={handleSearch}
          />
          <button className="search-btn btn" type="submit">
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="shows-wrapper">
        {shows.map((show) => {
          return (
            <div key={show.id}>
              <span>name:{show.name}</span>
              <span>genre:{show.genres[0]}</span>
              <img src={show.image.original} alt={show.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;

// id: show.show.id,
//             name: show.show.name,
//             genres: show.show.genres,
//             premiered: show.show.premiered,
//             rating: show.show.rating,
//             image: show.show.image.original,
//             summary: show.show.summary,
