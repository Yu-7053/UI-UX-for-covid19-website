import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Forum.css";
import {
  MenuItem,
  FormControl,
  Select,
  TextField,
  InputLabel,
} from "@material-ui/core";
import ForumTable from "./ForumTable/ForumTable";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";



function Forum() {
  
  const [country, setCountry] = useState("");
  const [state, setState] = useState ("");
  const [city, setCity] = useState ("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div className="forum">
      <div className="forum_title">
        <p style={{ fontSize: 40, fontWeight: "bold" }}>Forum</p>
      </div>
      <div className="forum_select">
        <p style={{ fontSize: 20, marginTop: "20px" }}>
          Please Select your location:
        </p>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={handleCountryChange}
            style={{ width: "150px", marginLeft: "10px" }}
          >
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Taiwan">Taiwan</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            onChange={handleStateChange}
            style={{ width: "150px", marginLeft: "10px" }}
          >
            <MenuItem value="Baden-Baden">Baden-Baden</MenuItem>
            <MenuItem value="Baden-Würtemberg">Baden-Würtemberg</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            onChange={handleCityChange}
            style={{ width: "150px", marginLeft: "10px" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          inputProps
          style={{ marginLeft: "48%" }}
        />

        <IconButton type="submit" aria-label="search" style={{ padding: 10 }}>
          <SearchIcon />
        </IconButton>
      </div>

      <div style={{ marginTop: "15px" }}>
        <ForumTable />
      </div>
    </div>
  );
}

export default Forum;
