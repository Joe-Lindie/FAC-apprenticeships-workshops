//CHALLENGE 2: USING STATE

//import 'hook' function from react library
import { useState } from "react";

function Shouter() {
  // Array desturcturing
  // set inital state to the string 'HELLO'. useState() can take ANY datatype
  const [shout, setShout] = useState("HELLO");

  // callback for keydown eventlistener
  const handleClick = (event) => {
    let uppercase = event.target.value.toUpperCase();
    setShout(uppercase);
  };

  return (
    <>
      <label>Go ahead and shout!</label>
      <input onKeyDown={handleClick} type="text" placeholder="hello" />
      <output>{shout}</output>
    </>
  );
}

// Need to use the onchange={} event listener to pass the test, sucks!
// Change event listener to  onchange={} and the test will pass.

export default Shouter;
