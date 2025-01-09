import { SplitScreen } from "./components/split-screen";

const LeftSideComponent = () => {
  return <h2>Left Side</h2>
}

const RightSideComponent = () => {
  return <h2>Right Side</h2>
}

function App() {
  return (
    <SplitScreen Left={LeftSideComponent} Right={RightSideComponent}/>
  );
}

export default App;