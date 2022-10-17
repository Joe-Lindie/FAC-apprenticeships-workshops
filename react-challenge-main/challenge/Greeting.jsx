//CHALLENGE 1: CREATING COMPONENTS

function Greeting(prop) {
  //console.log(prop);
  //Why does the console.log(prop) log twice?
  // prop returns an object {name: Joe}
  return <p>Hello {prop.name}</p>;
}

export default Greeting;

//export the Greeting function
