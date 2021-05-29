import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SingleShow from "./SingleShow";
import { BiSad } from "react-icons/bi";

const ShowList = () => {
  const { shows, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (shows.length < 1) {
    return (
      <div className="no-shows">
        <span>No shows found.</span>
        <span>
          <BiSad className="sad-icon" />
        </span>
      </div>
    );
  }

  return (
    <section className="shows-wrapper">
      {shows.map((show) => {
        return <SingleShow key={show.id} {...show} />;
      })}
    </section>
  );
};

export default ShowList;
