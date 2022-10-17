import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";

function App() {
  return (
    <main>
      <Greeting name="Joe" />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;
