import React from "react";
import Lottie from "lottie-react";

import { Box, Typography } from "@mui/material";

import services from "../illustrations/services.json";
import sbox from "../imgs/sarvvid_box.png";
import snode from "../imgs/sarvvid_node.png";
import shub from "../imgs/sarvvid_hub.png";
import sweb from "../imgs/sarvvid_web.png";

export default function Services() {
  const servicesArray = [
    { imgSrc: sbox, title: "SARVVID BOX", title2: "STORE YOUR DATA" },
    { imgSrc: snode, title: "SARVVID NODE", title2: "MONETIZE YOUR STORAGE" },
    { imgSrc: shub, title: "SARVVID HUB", title2: "CREATE YOUR HUB" },
    { imgSrc: sweb, title: "SARVVID WEB", title2: "SARVVID ON YOUR WEB" },
  ];
  return (
    <Box
      sx={{
        marginTop: "0rem",
        height: "550px",
        // overflow: "hidden",
        // bgcolor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Lottie animationData={services} style={{ width: "70px" }} />
        <Typography variant="h5" color={"white"}>
          SERVICES
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "4rem" }}>
        {servicesArray.map((s, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0rem 5rem",
                ":hover": { transform: "scale(1.04)" },
              }}
            >
              <img
                src={s.imgSrc}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: " white 0px 0px 15px",
                }}
                alt="sarvvid"
              />
              <Typography
                variant="body1"
                color={"white"}
                sx={{ margin: "1rem 0rem" }}
              >
                {s.title}
              </Typography>
              <Typography variant="body1" color={"#1B75BB"}>
                {s.title2}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
