import React, { useEffect, useState } from "react";
import axios from "../../axios-base";
import classes from "./CharactersPage.module.css";
import CharactersTable from "./CharactersTable/CharactersTable";

const CharactersPage = () => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/people");

      // //all movies, flat array
      // const movieUrlArr = response.data
      //   .map((char) => {
      //     return char.films;
      //   })
      //   .flat();
      // const movieArr = movieUrlArr.map(async (link) => {
      //   const movieResponse = await axios.get(link);
      //   const movieFiltered = await movieResponse.data.title;
      //   return movieFiltered;
      // });
      // const useableData = await Promise.all(movieArr);

      // console.log(useableData);

      const movieArr = await response.data.map((char) => {
        return char.films;
      });

      const fetchMovie = await movieArr.map(async (entry) => {
        const linkArr = await entry.map(async (link) => {
          const response = await axios.get(link);
          return response.data.title;
        });
        const afterPromise = await Promise.all(linkArr);
        return afterPromise;
      });
      const allMovies = await Promise.all(fetchMovie);

      const filteredData = response.data.map((entry, index) => {
        return { name: entry.name, age: entry.age, id: entry.id, movies: allMovies[index] };
      });
      setCharacterData(filteredData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>List of all Characters</h1>
          <CharactersTable data={characterData} />
        </div>
      )}
    </div>
  );
};

export default CharactersPage;
