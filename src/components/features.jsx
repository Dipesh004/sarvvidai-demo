import React, { useState } from "react";
import Lottie from "lottie-react";

import { Box, Typography } from "@mui/material";

import responsive from "../illustrations/58688-responsive.json";
import loader from "../illustrations/loader.json";
import fastaccess from "../illustrations/fastaccess.json";
import community from "../illustrations/community.json";
import datausage from "../illustrations/less use.json";
import easy from "../illustrations/easy.json";

export default function Features() {
  const [hexArray, setHexArray] = useState([
    "Real time function",
    "Amazingly responsive",
    "Fast access",
    "Community builder",
    "Less data usage",
    "Easy to use interface",
  ]);

  const logoLogic = (h) => {
    if (h === "Amazingly responsive") return responsive;
    if (h === "Real time function") return loader;
    if (h === "Fast access") return fastaccess;
    if (h === "Community builder") return community;
    if (h === "Less data usage") return datausage;
    return easy;
  };
  const styleLogic = (h) => {
    if (h === "Amazingly responsive") return { width: "100px" };
    if (h === "Real time function") return { width: "150px" };
    if (h === "Fast access")
      return { width: "100px", marginLeft: "2rem", marginRight: "1rem" };
    if (h === "Community builder")
      return { width: "80px", marginRight: "1rem" };
    if (h === "Less data usage")
      return { width: "80px", marginLeft: "2rem", marginRight: "2rem" };
    return { width: "80px", marginRight: "1rem" };
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignitems: "center",
        marginTop: "0rem",
        height: "550px",
        justifyContent: "space-between",
        padding: "0rem 2rem",
      }}
    >
      <Box
        sx={{
          //   bgcolor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }} color={"#1B75BB"}>
          FALL IN LOVE WITH OUR FEATURES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          //   bgcolor: "red",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "850px",
          flexWrap: "wrap",
        }}
      >
        {hexArray.map((h, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "425px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Lottie style={styleLogic(h)} animationData={logoLogic(h)} />
              <Typography color={"white"} variant="h5">
                {h}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
