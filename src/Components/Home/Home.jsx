import React, { useState, useEffect } from "react";
import { SortingAndFilter } from "../SortingAndFilter/SortingAndFilter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";
import { setCountry } from "../../Redux/Country/action";
import CircularIndeterminate from "../Loader/Loader";
import { Table } from "../Table/Table";

export const Home = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getReq();
  }, [dispatch]);

  const getReq = () => {
    setLoading(true);

    axios
      .get("http://localhost:8080/cities")
      .then(({ data }) => {
        dispatch(setCountry(data));
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };
  const cityData = useSelector((store) => store);

  const handleSortAZ = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Country > b.Country ? 1 : -1;
    });
    dispatch(setCountry(sortedData));
  };
  const handleSortZA = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Country > b.Country ? -1 : 1;
    });
    dispatch(setCountry(sortedData));
  };

  const handlePopOne = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Population > b.Population ? 1 : -1;
    });
    dispatch(setCountry(sortedData));
  };
  const handlePopNine = () => {
    const sortedData = [...cityData].sort((a, b) => {
      return a.Population > b.Population ? -1 : 1;
    });
    dispatch(setCountry(sortedData));
  };

  const handleDelte = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/cities/${id}`)
      .then(({ data }) => {
        // setData(data);
        getReq();
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };

  return loading ? (
    <div>
      <CircularIndeterminate />
    </div>
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
      <Table handleDelte={handleDelte} />
    </div>
  );
};
