import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./chart.css";

const Chart = () => {
  return (
    <div>
      <h2>Today's Report </h2>
      <div className="r-grid">
        <div className="rep-card-1">
          <div className="r-img-flex">
            <img src="./Group 162929.png" alt="heardt" className="love" />
            <img src="./Intersect.png" alt="interl" />
          </div>
          <br />
          <b>Heart Rate</b>
          <br />
          <b>
            78 <small>BPM</small>
          </b>
        </div>
        {/*  */}
        <div className="rep-card-2">
          <div className="r-img-flex">
            <img src="./Group 162929 (1).png" alt="group" className="love" />
            <img src="./Intersect.png " alt="interl" />
          </div>
          <b>Carbohydrates</b>
          <br />
          <b>
            123<small>GRAM</small>
          </b>
        </div>

        {/*  */}
        <div className="rep-card-3">
          <div className="r-img-flex">
            <img src="./Group 162929 (2).png" alt="group" className="love" />
            <img src="./Intersect.png" alt="inters" />
          </div>
          <b>Heart Rate</b>
          <br />
          <b>
            78 <span>BPM</span>
          </b>
        </div>
        {/*  */}
        <div className="rep-card-4">
          <div className="r-img-flex">
            <img src="./Group 162929 (3).png" alt="group" className="love" />
            <img src="./Intersect.png" alt="inters" />
          </div>
          <b>Calories Burned</b>
          <br />
          <b>
            245 <small>Kcal</small>
          </b>
        </div>
      </div>
      <div className="harts">
        <h2>Activities</h2>
        <BarChart
          className="barchart"
          series={[
            { data: [3, 4, 1, 6, 5], stack: "A", label: "1st week" },
            { data: [4, 3, 1, 5, 8], stack: "A", label: "2nd week" },
            { data: [4, 2, 5, 4, 1], stack: "B", label: "3th week" },
            { data: [2, 8, 1, 3, 1], stack: "B", label: "4th week" },
            { data: [10, 6, 5, 8, 9], label: "Series C1" },
          ]}
          width={1000}
          height={550}
        />
      </div>
    </div>
  );
};

export default Chart;
