import React from "react";
import Lottie from "lottie-react";

import { Box, Button, Typography } from "@mui/material";

import vision from "../illustrations/Innovative ideas.json";
import smallvision from "../illustrations/Comp 1.json";
import mission from "../illustrations/112042-target-commercial.json";
import smallmission from "../illustrations/kBV0Z1kI6n.json";

export default function VandM() {
  return (
    <>
      <Box
        sx={{
          marginTop: "0rem",
          height: "550px",
          // overflow: "hidden",
          // bgcolor: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0rem 1rem",
        }}
      >
        <Box sx={{}}>
          <Lottie style={{ width: "512px" }} animationData={vision} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "800px",
            //   bgcolor: "red",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Lottie
              animationData={smallvision}
              style={{
                width: "50px",
                marginRight: "0.5rem",
              }}
            />
            <Typography variant="h5" color={"white"}>
              VISION
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color={"#1B75BB"}
            sx={{ fontWeight: "bold" }}
            margin={"1rem 0rem"}
          >
            WHO WE ARE?
          </Typography>
          <Typography variant="body1" fontSize={"large"} color={"white"}>
            We are the first company in India to come up with a solution to the
            data storage problem through decentralization. Decentralized based
            file storage solutions work by storing your files across multiple
            computers, or nodes, on a decentralized network. With no single
            point of failure or single authority who has oversight over your
            files, these solutions provide Benefits such as greater privacy,
            faster speeds, fairer market prices, and minimal file loss. In
            short, you'll be the master of your own data and break the monopoly
            rule of the big tech company that has made privacy a child's play.
          </Typography>
          <Typography
            variant="body1"
            fontSize={"large"}
            margin={"1rem 0rem"}
            color={"white"}
          >
            MANISH SONI [CEO]
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "0rem",
          height: "550px",
          // overflow: "hidden",
          // bgcolor: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0rem 1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "800px",
            //   bgcolor: "red",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Lottie
              animationData={smallmission}
              style={{ width: "100px", marginLeft: "-1.5rem" }}
            />
            <Typography variant="h5" color={"white"}>
              MISSION
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold" }}
            color={"#1B75BB"}
            margin={"1rem 0rem"}
          >
            WHAT WE DO?
          </Typography>
          <Typography variant="body1" fontSize={"large"} color={"white"}>
            Sarvvid™ has two major services namely, SARVVIDBOX and SARVVIDNODE.
            SarvvidBox will provide you with extra storage on your device as
            there is limited storage in our HAND. When you are out of storage
            you can use our services where you'll get 20GB free data storage and
            after that, you can pay and buy storage.There is a scarcity of good
            storage service in our market as most of them play with our privacy.
            SarvvidNode is a completely new concept where you can get paid by
            renting your extra storage. You can MONETIZE your storage with us
            and earn money just by sitting home. Just sign in with the app and
            become a node and start earning.
          </Typography>
          <Typography
            variant="body1"
            fontSize={"large"}
            margin={"1rem 0rem"}
            color={"white"}
          >
            -Team Sarvvid
          </Typography>
        </Box>
        <Box sx={{}}>
          <Lottie style={{ width: "450px" }} animationData={mission} />
        </Box>
      </Box>
    </>
  );
}
