import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core/";
import { withRouter } from "react-router-dom";

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" style={{marginTop:"10px", marginLeft:"40px"}}>
      {pathnames.length > 0 ? (
        <Link style={{cursor: "pointer"}} onClick={() => history.push("/")}>Home</Link>
      ) : (
        <Typography></Typography>
      )}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography>{name}</Typography>
        ) : (
          <Link style={{cursor: "pointer"}} onClick={() => history.push(routeTo)}>{name}</Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
