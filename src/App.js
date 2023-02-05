import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./index.css";

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);

  const yourInterest = () => {
    setSi((p * t * r) / 100);
  };

  return (
    <div className="button">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField
        onChange={(event) => setP(event.target.value)}
        id="outlined-basic"
        label="Enter Principle"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setT(event.target.value)}
        id="outlined-basic"
        label="Enter Time"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setR(event.target.value)}
        id="outlined-basic"
        label="Enter Rate"
        variant="outlined"
      />
      <br /> <br />
      <Button onClick={() => yourInterest()} variant="contained">
        Calculate
      </Button>
      <Typography variant="h6" gutterBottom>
        Your Simple Interest is: {si}
      </Typography>
    </div>
  );
};

export default App;
