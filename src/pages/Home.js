import React, { useState, useEffect } from "react";
import { BiTv } from "react-icons/bi";

const Home = () => {
  const [redScreen, setRedScreen] = useState(false);
  useEffect(() => {
    const timeoutFirst = setTimeout(() => setRedScreen(true), 1000);
    const timeoutSecond = setTimeout(() => setRedScreen(false), 1100);
    return () => {
      clearTimeout(timeoutFirst, timeoutSecond);
    };
  }, []);

  return (
    <section className="home">
      <div className="title-wrapper">
        <div className="title-top">
          <span className="title title-1">TV</span>
        </div>
        <div className="title-bottom">
          <span className="title title-2">sho</span>
          <span className="title title-3">(w)</span>
          <span className="title title-4">pper</span>
        </div>
        <div className={`screen ${redScreen ? "screen-red" : ""}`}></div>
        <BiTv className="tv-icon" />
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
