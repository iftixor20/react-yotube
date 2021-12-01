import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Left from "./components/Left/left";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
  return (
    <>
      <div className="row bg-dark">
        <div className="col-3 pe-0">{<Left />}</div>
        <div className="col-9 ps-0">{<Toolbar />}</div>
      </div>
    </>
  );
}

export default App;