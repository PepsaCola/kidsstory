import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/home";
import {Shared} from "./pages/shared/shared";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Shared/>} >
            <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
