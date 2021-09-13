import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ paddingBottom: "20px" }}>
        <BrowserRouter basename="blog-app-react">
          <Header />
          <Switch>
            <Route exact path="/posts/:id" component={BlogPage} />
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
