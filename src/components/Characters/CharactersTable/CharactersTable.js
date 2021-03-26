import React from "react";
import classes from "./CharactersTable.module.css";

const CharactersTable = () => {
  return (
    <div className={classes.table}>
      <table>
        <thead>
          <tr>
            <th>Charactername</th>
            <th>Movie</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pazu</td>
            <td>Castle in the Sky</td>
            <td>13</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CharactersTable;
