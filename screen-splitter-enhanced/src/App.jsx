import { SplitScreen } from "./components/split-screen";

const LeftSideComponent = () => {
  return <h2 style={{backgroundColor: 'blue'}}>Left Side</h2>
}

const RightSideComponent = () => {
  return <h2 style={{backgroundColor: 'crimson'}}>Right Side</h2>
}

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent/>
      <RightSideComponent/>
    </SplitScreen>
  );
}

export default App;