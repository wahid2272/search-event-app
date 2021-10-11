import Axios from "axios";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ResultTable from "./ResultTable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "40ch",
    },
  },
  container: {
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    paddingBottom: 15,
  },
  text: {
    fontSize: 16,
  },
}));

const Search = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [type, setType] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      await Axios.post("http://localhost:3005/search", {
        searchValue: e.target.value,
      })
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes.container}>
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
          onInput={(e) => setType(e.target.value)}
        />
      </form>
      <Typography variant="h4" color="inherit" className={classes.header}>
        Result:
      </Typography>
      {/* Result output shown in here */}
      {type.length === 0 ? (
        <p className={classes.text}>Type Something to get a result.</p>
      ) : (
        <ResultTable data={info} /> // search result data is fetched in a seperate component
      )}
    </div>
  );
};

export default Search;
