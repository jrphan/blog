import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/settings/Setting";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;

  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/">
                  <Topbar/>
                  <Home/>
              </Route>
              <Route path="/register">
                  {user && <Topbar/>}
                  {user ? <Home/> : <Register/>}
              </Route>
              <Route path="/login">
                  {user && <Topbar/>}
                  {user ? <Home/> : <Login/>}
              </Route>
              <Route path="/write">
                  {user && <Topbar/>}
                  {user ? <Write/> : <Login/>}
              </Route>
              <Route path="/setting">
                  {user && <Topbar/>}
                  {user ? <Setting/> : <Login/>}
              </Route>
              <Route path="/post/:postId">
                  <Topbar/>
                  <Single/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
