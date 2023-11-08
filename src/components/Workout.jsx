import React from "react";
import "./Workout.css";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

const Workout = () => {
  const [searchInput, setSearchInput] = useState("");
  const [change, onChange] = useState(1);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const ele = document.querySelector(".buld");
    if (ele) {
      ele.style.left = `${Number(change / 4)}px`;
    }
  });

  const Search = [
    {
      id: 1,
      image: "./BG (5).png",
      title: "Up and Down Stairs",
      details: "Train your tighs and legs",
      onTop: "Tighs",
      onImage: "Legs",
    },
    {
      id: 2,
      image: "./BG (4).png",
      title: "Lifting Belly",
      details: "Shape the stomach to...",
      onTop: "Stomach",
      onImage: "Hands",
    },
    {
      id: 3,
      image: "./BG (3).png",
      title: "Up and Down Stairs",
      details: "Train your tighs and legs",
      onTop: "Tighs",
      onImage: "Legs",
    },
    {
      id: 4,
      image: "./BG (2).png",
      title: "Lifting Belly",
      details: "Shape the stomach to...",
      onTop: "Stomach",
      onImage: "Hands",
    },
  ];

  return (
    <div className="workout-section">
      <h1>Workout Today!</h1>
      <div className="w-container">
        <div className="w-search">
          <div className="w-s-bar">
            <span className="w-s-flex">
              <SearchIcon />{" "}
              <input
                type="search"
                name="search"
                placeholder="Search.."
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
              />{" "}
            </span>

            <TuneIcon
              className="tune"
              onClick={() => {
                setActive(!active);
              }}
            />
          </div>
        </div>

        <div className="cat-section">
          <div className="cat-sec">
            <h2>Category</h2>
            <div className="cat-images">
              <img src="./List Category (1).png" alt="category imges" />
              <img src="./List Category.png" alt="category imges" />
              <img src="./List Category (2).png" alt="category imges" />
              <img src="./List Category (3).png" alt="category imges" />
            </div>
          </div>
        </div>

        <div className="search-contents">
          {Search.filter((value) => {
            if (searchInput === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return value;
            }
          }).map((value) => {
            return (
              <div className="s-items" key={value.id}>
                <div className="textHover">
                  <span>{value.onTop}</span>
                  <span>{value.onImage}</span>
                </div>
                <img src={value.image} alt="" />
                <b>{value.title}</b>
                <p>{value.details}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`filters ${active ? null : "active"}`}>
        <div className="filter">
          <span className="close-icon">
            <CloseIcon
              className="c-icon"
              onClick={() => {
                setActive(!active);
              }}
            />
          </span>
          <div className="range-conatiner">
            <input
              type="range"
              min="10"
              max="500"
              width={100}
              change={change}
              onChange={({ target: { change: radius } }) => {
                onChange(radius);
              }}
            />
            <span className="buld">{change}</span>
          </div>
          <div className="p-cat section">
            <h3>Pupular Category</h3>
            <div className="p-car">
              <span>Foot</span>
              <span>Stomach</span>
              <span>Arm</span>
              <span>Chest</span>
              <span>Thigh</span>
              <span>Butt</span>
            </div>

            <h3>Date Upload</h3>
            <div className="p-car">
              <span>Latest</span>
              <span>11 minute ago</span>
              <span>1 day ago</span>
              <span>3 weeks ago</span>
              <span>1 month ago</span>
              <span>Longest</span>
            </div>
          </div>
          <button type="submit" className="apply">
            Apply Filter
          </button>
          <div className="clear">
            <button
              type="delete"
              style={{ color: "red" }}
              onClick={() => {
                setActive(!active);
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
