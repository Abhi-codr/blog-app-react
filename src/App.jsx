import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "./App.css";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPage";

function App() {
  return (
    <Provider store={store}>
      <div style={{ paddingBottom: "20px" }}>
        <BrowserRouter>
          <ReactNotification />
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/new-post" component={NewPostPage} />
              <Route exact path="/posts/:id" component={BlogPage} />
              <Route exact path="/edit-post/:id" component={EditPostPage} />
              <Route exact path="/" component={HomePage} />
              <Redirect exact to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
