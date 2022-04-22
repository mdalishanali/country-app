import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Table = ({ handleDelte }) => {
  const cityData = useSelector((store) => store);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cityData &&
            cityData.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.Country}</td>
                  <td>{e.City}</td>
                  <td>{e.Population}</td>
                  <Link to={`/editCity/${e.id}`}>
                    <td>Edit</td>
                  </Link>
                  <td onClick={() => handleDelte(e.id)}>
                    {" "}
                    <button>{"Delete"} </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
