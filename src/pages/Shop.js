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
          <div className="search-btn btn">
            <BiSearch />
          </div>
        </form>
      </div>
      <ShowList />
    </section>
  );
};

export default Shop;
