//CHALLENGE 3: MOUSE TRACKING

import { useState } from "react";
import { useEffect } from "react";

function MouseTracker() {
  // useState() only accepts one argument
  // set inital coordinates to 0, 0
  const [coordinates, setCoordinates] = useState("0,0");

  useEffect(() => {
    const updateCoor = (event) => {
      const xaxis = event.clientX;
      const yaxis = event.clientY;
      const coor = `${xaxis},${yaxis}`;

      setCoordinates(coor);
    };

    //Set body to 100vh
    // document.body.style.minHeight = "100vh";
    // document.body.addEventListener("mousemove", updateCoor);
    // return () => document.body.removeEventListener("mousemove", updateCoor);

    window.addEventListener("mousemove", updateCoor);
    return () => window.removeEventListener("mousemove", updateCoor);
  }, []);

  return <output>{coordinates}</output>;
}

export default MouseTracker;
