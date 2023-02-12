import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "./components/navbar";
import Home from "./components/home";
import VandM from "./components/visionAndMission";
import Services from "./components/services";
import Features from "./components/features";

export default class App extends Component {
  render() {
    return (
      <Box sx={{ bgcolor: "#0C0310" }}>
        <Navbar />
        <Home />
        <VandM />
        <Services />
        <Features />
      </Box>
    );
  }
}
