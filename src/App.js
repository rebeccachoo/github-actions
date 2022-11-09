import "./App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  const [num, setNum] = useState(null);
  const factorial = (n) => {
    if (num) {
      if (n < 0) {
        throw new Error("Factorial is only defined for non-negative integers");
      }
      if (n === 0) {
        return 1;
      }
      return n * factorial(n - 1);
    }
  };
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "primary.dark",
          // "&:hover": {
          //   backgroundColor: "primary.main",
          //   opacity: [0.9, 0.8, 0.7],
          // },
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "43px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>Enter a number to get a factorial number:</Box>
          <TextField
            value={num}
            onChange={(e) => setNum(e.target.value)}
            id="outlined-basic"
            label="Ex. 94"
            variant="outlined"
            sx={{ background: "white", my: 2, width: "100px" }}
          />
          Factorial of {num} is {num ? factorial(num) : "_"}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
