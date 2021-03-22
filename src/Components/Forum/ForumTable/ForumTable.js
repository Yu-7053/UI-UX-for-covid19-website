import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "title", label: "Title", minWidth: 100 },
  {
    id: "review",
    label: "Review",
    minWidth: 100,
    align: "center",
    alignText: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
    align: "center",
    alignText: "",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "check",
    label: "Check it Out",
    minWidth: 170,
    align: "center",
    alignText: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, title, review, description, check) {
  return { name, title, review, description, check };
}

const rows = [
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
  createData(
    "Yu Wu",
    "What’s the use of wearing mask if no one is following the rules?",
    "100",
    "While walking on street on bismarktplatz, someone is not wearing mask but no one cares about it.",
    <Link>Read Article</Link>
  ),
];

const useStyles = makeStyles({
  root: {
    width: "95%",
    marginLeft: "3%",
  },
  container: {
    maxHeight: 666,
  },
});

export default function ForumTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table"> 
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.alignText}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={10}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
