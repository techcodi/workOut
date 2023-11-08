import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <menu className="menu">
        <Link to="/" className="nav-icon">
          <HomeOutlinedIcon />
          <span>Home</span>
        </Link>
        <Link to="./workout" className="nav-icon">
          <FitnessCenterIcon />
          <span>Workout</span>
        </Link>
        <Link to="/chart" className="nav-icon">
          <InsightsIcon />
          <span>Statistics</span>
        </Link>
        <div className="nav-icon">
          <PersonOutlinedIcon />
          <span>Profile</span>
        </div>
      </menu>
    </nav>
  );
};

export default Nav;
