import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    textAlign: "center",
  },
});

const ResultTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Found Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((dataName, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {dataName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
