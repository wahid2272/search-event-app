import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "40ch",
    },
  },
  header: {
    paddingLeft: 20,
  },
}));

const Search = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      await Axios.post("http://localhost:3005/search", {
        searchValue: e.target.value,
      })
        .then(
          (response) => {
            setInfo(response.data);
          }
        )
        .then((error) => console.log(error));
    }
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onChange={(e) => e.preventDefault}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleChange}
        />
      </form>
      <Typography variant="h4" color="inherit" className={classes.header}>
        Result:
      </Typography>
    </div>
  );
};

export default Search;
