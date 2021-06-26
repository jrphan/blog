import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";

function App() {
  return (
    <div className="App">
      <>
        <Topbar/>
        <Home/>
        {/* <Single/> */}
        {/* <Write/> */}
      </>
    </div>
  );
}

export default App;
