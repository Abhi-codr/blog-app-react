import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
