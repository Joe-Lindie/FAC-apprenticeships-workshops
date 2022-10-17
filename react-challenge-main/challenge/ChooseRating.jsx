import { useState } from "react";

function ChooseRating() {
  const [rating, setRating] = useState(3);

  function updateRating(event) {
    const rating = event.target.value;
    setRating(rating);
  }

  return (
    <>
      <input onChange={updateRating} type="range" min="1" max="5" />
      <output>{"⭐️".repeat(rating)}</output>
    </>
  );
}

export default ChooseRating;
