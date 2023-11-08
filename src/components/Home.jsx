import React from "react";
import "./Home.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Popular = [
  {
    id: 1,
    image: "./BG.png",
    title: "Up and Down Stairs",
    details: "Train your tighs and legs",
    onTop: "Tighs",
    onImage: "Legs",
  },
  {
    id: 2,
    image: "./BG (1).png",
    title: "Lifting Belly",
    details: "Shape the stomach to...",
    onTop: "Stomach",
    onImage: "Hands",
  },
  {
    id: 3,
    image: "./BG.png",
    title: "Up and Down Stairs",
    details: "Train your tighs and legs",
    onTop: "Tighs",
    onImage: "Legs",
  },
  {
    id: 4,
    image: "./BG (1).png",
    title: "Lifting Belly",
    details: "Shape the stomach to...",
    onTop: "Stomach",
    onImage: "Hands",
  },
];

const Home = () => {
  return (
    <header>
      <div className="h-container">
        <div className="header-head">
          <img src="./1 70.png" alt="user profie" />
          <div className="h-h-right">
            <img src="./Message.png" alt="messgea" />
            <NotificationsNoneOutlinedIcon />
          </div>
        </div>
        <div className="user-wlc">
          <p>Hi , Welcome !</p>
          <h2>Have you exercised today ?</h2>
        </div>
        <div className="weight-container">
          <div className="w-div">
            <span>Weight</span>
            <p>
              89 <smaal>kg</smaal>
            </p>
          </div>
          <div className="w-div">
            <span>Height</span>
            <p>
              189 <smaal>Cm</smaal>
            </p>
          </div>
          <div className="w-div">
            <span>Total</span>
            <p>
              45 <smaal>%</smaal>
            </p>
          </div>
        </div>
      </div>

      {/*  ============================================*/}

      <div className="header-under">
        <div className="h-under-container">
          <div className="afro-man">
            <div className="afrovid">
              <h3>Healthy life belongs to everyone</h3>
              <button className="afro-btn">Start Exercising</button>
            </div>
            <img
              src="./portrait-smiling-afro-american-sports-man-stretching-his-muscular-arms-before-workout-by-sea-using-music-app-his-smartphone 1afro.png"
              alt="gym man"
            />
          </div>
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

      <div className="popular-section">
        <div className="p-head">
          <h2>Popular Workout</h2>
          <p className="view">View all</p>
        </div>
        <div className="p-container">
          {Popular.map((popular, id) => {
            return (
              <div key={id}>
                <div className="p-details">
                  <img src={popular.image} alt="" />
                  <b>{popular.title}</b>
                  <p>{popular.details}</p>
                </div>
                <div className="onHover">
                  <span>{popular.onTop}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Home;
