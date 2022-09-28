import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={counter}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => {
              dispatch(increment(5));
            }}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
