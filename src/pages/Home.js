import React from "react";
import { BiTv } from "react-icons/bi";

const Home = () => {
  return (
    <section className="home">
      <div className="title-wrapper">
        <BiTv className="tv-icon" />
        <div className="title-top">
          <span className="title title-1">TV</span>
        </div>
        <div className="title-bottom">
          <span className="title title-2">sho</span>
          <span className="title title-3">(w)</span>
          <span className="title title-4">pper</span>
        </div>
      </div>
      <div className="description">
        <p>Tired of spending hours watching Netflix every day?</p>
        <p>No more procrastination!</p>
        <p>With TV shopper you pay only for shows you want to see.</p>
        <p>No registration, just pick a show, pay and watch.</p>
      </div>
    </section>
  );
};

export default Home;
