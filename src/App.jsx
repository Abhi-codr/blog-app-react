import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter basename="blog-app-react">
        <div
          style={{
            display: "flex",
            height: "80px",
            width: "100%",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h2>Blog App</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "20%",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Blogs
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
