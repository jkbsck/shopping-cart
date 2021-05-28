import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../context";
import ShowList from "../components/ShowList";

const Shop = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const handleSearch = () => {
    setSearchTerm(searchValue.current.value);
  };

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
      <ShowList />
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
