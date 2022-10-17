import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";
import ChooseRating from "./ChooseRating.jsx";

function App() {
  return (
    <main>
      <Greeting name="Joe" />
      <Shouter />
      <MouseTracker />
      <ChooseRating />
    </main>
  );
}

export default App;
