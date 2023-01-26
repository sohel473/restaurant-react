import "./App.css";
import MainComponent from "./components/MainComp";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  // console.log(myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
