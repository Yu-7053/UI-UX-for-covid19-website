import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import numeral from "numeral"
import "./UsaStateTable.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsaStateTable({ countries }) {
  const classes = useStyles();

  return (
    <TableContainer className="usaStateTable" component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell
              key="state"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              State
            </TableCell>
            <TableCell
              align="right"
              key="state"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Cases
            </TableCell>
            <TableCell
              align="right"
              key="state"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Deaths
            </TableCell>
            <TableCell
              align="right"
              key="state"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Recovered
            </TableCell>
            <TableCell
              align="right"
              key="state"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              Cases per 1 Million
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map(
            ({ state, cases, recovered, deaths, casesPerOneMillion }) => (
              <TableRow key={state}>
                <TableCell component="th" scope="row">
                  {state}
                </TableCell>
                <TableCell align="right">{numeral(cases).format("0,0")}</TableCell>
                <TableCell align="right">{numeral(recovered).format("0,0")}</TableCell>
                <TableCell align="right">{numeral(deaths).format("0,0")}</TableCell>
                <TableCell align="right">{numeral(casesPerOneMillion).format("0,0")}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
