import axios from "axios";
import React, { useEffect, useState } from "react";

export const AddCity = () => {
  const initState = {
    Country: "",
    City: "",
    Population: null,
  };
  const [data, setData] = useState(initState);

  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/country").then(({ data }) => {
      setCountry(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCities();
  };

  const addCities = async () => {
    try {
      await fetch("http://localhost:8080/cities", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);

      setData({
        Country: "",
        City: "",
        Population: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div>
        <h1>Add City</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="City"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <br />
          <select name="Country" id="" onChange={handleChange}>
            {country.map((e) => {
              //console.log(e);
              return (
                <option key={e.id} value={e.country}>
                  {e.country}
                </option>
              );
            })}
          </select>
          <br />
          <input
            onChange={handleChange}
            type="number"
            placeholder="population"
            name="Population"
          />
          <br />
          <input type="submit" value="ADD CITY" />
        </form>
      </div>
    </div>
  );
};
