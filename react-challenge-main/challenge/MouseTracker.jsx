//CHALLENGE 3: MOUSE TRACKING

//import useState / useEffect from react library
import { useState } from "react";
import { useEffect } from "react";

function MouseTracker() {
  // useState() only accepts one argument
  // set inital coordinates to 0, 0
  const [coordinates, setCoordinates] = useState("0,0");

  //useEffect() will be run after every render
  //useEffect() take a fn as an argument.
  useEffect(() => {
    // fn to update coordinates
    const updateCoor = (event) => {
      const xaxis = event.clientX;
      const yaxis = event.clientY;
      const coor = `${xaxis},${yaxis}`;

      // update inital coordinates
      setCoordinates(coor);
    };

    window.addEventListener("mousemove", updateCoor);
    // clean up effects
    // The return statment will run after every render removing the eventlistener.

    return () => {
      window.removeEventListener("mousemove", updateCoor);
    };
  }, []);

  return <output>{coordinates}</output>;
}

export default MouseTracker;

//Set body to 100vh
// document.body.style.minHeight = "100vh";
// document.body.addEventListener("mousemove", updateCoor);
// return () => document.body.removeEventListener("mousemove", updateCoor);
