import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import sarvvid from "../imgs/sarvvid_logo.png";
import home from "../illustrations/newScene.json";
import features from "../illustrations/paper.json";
import pricing from "../illustrations/pricing.json";
import project from "../illustrations/icon create.json";
import blogs from "../illustrations/8 - Blog.json";
import about from "../illustrations/lf30_editor_ksfg4fef.json";
import contactus from "../illustrations/Contacts.json";
import Lottie from "lottie-react";
import { color } from "@mui/system";

export default function Navbar() {
  const [navItems, setNavItems] = useState([
    home,
    features,
    pricing,
    project,
    blogs,
    about,
    contactus,
  ]);
  const nameLogic = (item) => {
    if (item === home) return "home";
    if (item === features) return "features";
    if (item === pricing) return "pricing";
    if (item === project) return "project";
    if (item === blogs) return "blogs";
    if (item === about) return "about";
    return "contact us";
  };
  const styleLogic = (item) => {
    if (item === home) return { height: "25px", color: "white" };
    return { height: "40px", color: "white" };
  };
  return (
    <Box sx={{}}>
      <AppBar position="fixed" sx={{ bgcolor: "#0C0310" }}>
        <Toolbar>
          <img src={sarvvid} alt="sarvvid" style={{ width: "200px" }} />
          <Box sx={{ marginLeft: "5rem" }}>
            {navItems.map((item, index) => {
              return (
                <Button
                  key={index}
                  color="inherit"
                  sx={{ margin: "0rem 1rem" }}
                >
                  <Lottie style={styleLogic(item)} animationData={item} />
                  {nameLogic(item)}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
