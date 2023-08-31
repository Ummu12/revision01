
import React from "react";
import { CompA } from "./Component/CompA";
import { CompB } from "./Component/CompB";
import { Card,CardContent, Grid } from "@mui/material";


function App() {
  return (
    
  <Card sx={{bgcolor:"lightpink"}}>
      <CardContent>
      <Grid container spacing={3}>
      <Grid item xs={3}>
         <CompA/>
      </Grid>
        <Grid item xs={3}>
        <CompB/>
        </Grid>
        <Grid item xs={3}>
        <CompA/>
      </Grid>
      <Grid item xs={3}>
        <CompB/>
      </Grid>

  </Grid>
  <Card/>
  <CardContent/>

  );
}

export default App;
