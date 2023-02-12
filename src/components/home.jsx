import React from "react";
import Lottie from "lottie-react";

import { Box, Button, Typography } from "@mui/material";

import background from "../illustrations/93539-background.json";
import cloud from "../illustrations/Cloud Computing Security.json";

export default function Home() {
  return (
    <Box sx={{ marginTop: "4rem", height: "700px", overflow: "hidden" }}>
      <Lottie animationData={background} />
      <Box sx={{ position: "absolute", top: "7rem", right: "2rem" }}>
        <Lottie animationData={cloud} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "15rem",
          left: "12rem",
          width: "600px",
        }}
      >
        <Typography variant="h3" color={"white"}>
          ONE STOP FOR ALL YOUR STORAGE SOLUTION
        </Typography>
        <Typography variant="h6" color={"white"} margin={"1rem 0rem"}>
          We have designed products and services for all your data storage
          problems with our cutting-edge innovation and advanced technology.
        </Typography>
        <Button sx={{ width: "6rem", marginTop:"1rem",color:"white" }} variant="outlined">
          Explore
        </Button>
      </Box>
    </Box>
  );
}
