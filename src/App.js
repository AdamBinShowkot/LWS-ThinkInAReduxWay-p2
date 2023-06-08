import { Fragment } from "react";
import './assets/css/index.css'
import MainComponent from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    </Fragment>
  );
}

export default App;
