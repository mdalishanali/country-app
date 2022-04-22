import React from "react";
import { useSelector } from "react-redux";

export const  Table = ({ handleDelte }) => {
  const cityData = useSelector((store) => store);
  console.log("cityData", cityData);
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
                  <td>Edit</td>
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
