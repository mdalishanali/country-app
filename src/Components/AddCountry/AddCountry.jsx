import React, { useState } from "react";
import axios from "axios";
// import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export const AddCountry = () => {
  const initState = {
    country: "",
  };
  const [country, setCountry] = useState(initState);
  console.log(country);

  const Add_Country = () => {
    axios.post("http://localhost:8080/country", country).then((res) => {
      console.log(res);
    });
  };
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCountry({ [name]: value });
  };
  return (
    <div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Country</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Add Country to this website, please enter your Country ....
            </DialogContentText>
            <textarea
              autoFocus
              margin="dense"
              id="name"
              fullWidth
              variant="standard"
              type="text"
              name="country"
              onChange={handleChange}
              placeholder="enter country name"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                Add_Country();
              }}
            >
              Add Country
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
