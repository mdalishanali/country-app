import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateCity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("fuuu", id);
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

  const handleUpdate = () => {
    axios.patch(`http://localhost:8080/cities/${id}`, data).then(() => {
      console.log(data);
      navigate("/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div>
        <h1>EDIT City</h1>
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
          <input type="submit" value="EDIT CITY" />
        </form>
      </div>
    </div>
  );
};
