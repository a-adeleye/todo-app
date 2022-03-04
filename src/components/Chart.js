import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CompletedChart(props) {

  return (
    <CircularProgressbar
      value={props.percentage}
      text={`${props.percentage}%`}
      styles={{
        path: {
          stroke: "#24BCAB",
          strokeLinecap: "round",
          transition: "stroke-dashoffset 0.5s ease 0s",
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        text: {
          fill: "#75797c",
          fontSize: "19px",
        },
        background: {
          fill: "none",
        },
      }}
    />
  );
}

function InProgressChart(props){
  return (
    <CircularProgressbar
      value={props.percentage}
      text={`${props.percentage}%`}
      styles={{
        path: {
          stroke: "#B9B8FE",
          strokeLinecap: "round",
          transition: "stroke-dashoffset 0.5s ease 0s",
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        text: {
          fill: "#75797c",
          fontSize: "19px",
        },
        background: {
          fill: "none",
        },
      }}
    />
  );
}

export {CompletedChart, InProgressChart}
