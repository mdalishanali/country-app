import React, { useState, useEffect } from "react";
import { SortingAndFilter } from "../SortingAndFilter/SortingAndFilter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";
import { setCountry } from "../../Redux/Country/action";
import CircularIndeterminate from "../Loader/Loader";
import { Table } from "../Table/Table";
import { AddCountry } from "../AddCountry/AddCountry";
import { Link } from "react-router-dom";

///
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
///
export const Home = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  ///
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  ///
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
      <Link to={"/add-country"}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Country
        </Button>
      </Link>

      <Link to="/add-city">
        <Button variant="outlined">Add City</Button>
      </Link>
      <SortingAndFilter
        handlePopNine={handlePopNine}
        handlePopOne={handlePopOne}
        handleSortAZ={handleSortAZ}
        handleSortZA={handleSortZA}
      />
      <div>
        <Link to="/add-country">
          <button>Add Country</button>{" "}
        </Link>
      </div>
      <Table handleDelte={handleDelte} />
    </div>
  );
};
