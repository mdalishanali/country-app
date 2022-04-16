import React, { useState, useEffect } from "react";
import { SortingAndFilter } from "../SortingAndFilter/SortingAndFilter";
import axios from "axios";
export const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/data")
      .then(({ data }) => {
        setData(data);
        console.log("ali", data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      });
  };
  const handleSortAZ = () => {
    const sortedData = [...data].sort((a, b) => {
      return a.Country > b.Country ? 1 : -1;
    });
    setData(sortedData);
  };
  const handleSortZA = () => {
    const sortedData = [...data].sort((a, b) => {
      return a.Country > b.Country ? -1 : 1;
    });
    setData(sortedData);
  };

  const handlePopOne = () => {
    const sortedData = [...data].sort((a, b) => {
      return a.Population > b.Population ? 1 : -1;
    });
    setData(sortedData);
  };
  const handlePopNine = () => {
    const sortedData = [...data].sort((a, b) => {
      return a.Population > b.Population ? -1 : 1;
    });
    setData(sortedData);
  };

  const handleDelte = (id) => {
    axios.delete(`http://localhost:8080/data/${id}`).then(({ data }) => {
      setData(data);
    });
  };
  return loading ? (
    <div>I am Loaing</div>
  ) : error ? (
    <div>Eroor</div>
  ) : (
    <div>
      <SortingAndFilter
        handlePopNine={handlePopNine}
        handlePopOne={handlePopOne}
        handleSortAZ={handleSortAZ}
        handleSortZA={handleSortZA}
      />
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
          {data &&
            data.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.Country}</td>
                  <td>{e.City}</td>
                  <td>{e.Population}</td>
                  <td>Edit</td>
                  <td onClick={() => handleDelte(e.id)}>{"Delete"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
