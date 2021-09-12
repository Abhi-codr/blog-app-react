import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter basename="blog-app-react">
        <Header />
        <Switch>
          <Route exact path="/posts/:id" component={BlogPage} />
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
