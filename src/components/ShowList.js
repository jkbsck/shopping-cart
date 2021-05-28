import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SingleShow from "./SingleShow";

const ShowList = () => {
  const { shows, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
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
