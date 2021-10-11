import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "40ch",
    },
  },
  header: {
    "& > *": {
      margin: theme.spacing(3),
      // width: '40ch',
    },
    paddingLeft: 20,
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </form>
      <Typography variant="h4" color="inherit" className={classes.header}>
        Result:
      </Typography>
    </div>
  );
};

export default Search;
