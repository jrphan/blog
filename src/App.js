import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";

function App() {
  return (
    <div className="App">
      <>
        <Topbar/>
        <Home/>
        {/* <Single/> */}
      </>
    </div>
  );
}

export default App;
