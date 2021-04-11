import React from "react";
import classes from "./CharactersTable.module.css";

const CharactersTable = (props) => {
  const { data } = props;

  const tableRows = data.map((character, index) => {
    if (character.age === "" || character.age === "NA") {
      character.age = "Unknown";
    }
    return (
      <tr key={character.id}>
        <td>{character.name}</td>
        <td>{character.age}</td>
        <td>{character.movies.join(" & ")}</td>
      </tr>
    );
  });

  return (
    <div className={classes.table}>
      <table>
        <thead>
          <tr>
            <th>Charactername</th>
            <th>Age</th>
            <th>Movie</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default CharactersTable;
