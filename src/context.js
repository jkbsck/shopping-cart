import React, { useContext, useState, useEffect, useCallback } from "react";

const url = "http://api.tvmaze.com/search/shows?q=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("girls");

  const fetchShows = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      // console.log(data);

      if (data.length > 0) {
        const newShows = data.map((show) => {
          return {
            id: show.show.id,
            name: show.show.name,
            genres: show.show.genres,
            premiered: show.show.premiered,
            rating: show.show.rating,
            image: show.show.image ? show.show.image.medium : null,
            summary: show.show.summary,
          };
        });
        setShows(newShows);
      } else {
        setShows([]);
      }
      // const newShows = data
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    console.log(shows);
  }, [searchTerm]);

  useEffect(() => {
    fetchShows();
  }, [searchTerm, fetchShows]);

  return (
    <AppContext.Provider value={{ setSearchTerm, shows, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
