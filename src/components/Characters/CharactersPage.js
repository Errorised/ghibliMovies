import React, { useEffect, useState } from "react";
import axios, { noBaseUrl } from "../../axios-base";
import classes from "./CharactersPage.module.css";
import CharactersTable from "./CharactersTable/CharactersTable";

const CharactersPage = () => {
  const [characterData, setCharacterData] = useState([]);
  const [movieNames, setMovieNames] = useState([]);
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
      const endResult = await Promise.all(fetchMovie);
      console.log(endResult);

      const filteredData = response.data.map((entry) => {
        return { name: entry.name, age: entry.age };
      });
      setMovieNames(endResult);
      setCharacterData(filteredData);
      setLoading(false);
      console.log(characterData);
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
          <CharactersTable />
        </div>
      )}
    </div>
  );
};

export default CharactersPage;
