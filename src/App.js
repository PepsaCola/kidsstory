import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/home";
import {Shared} from "./pages/shared/shared";
import {Additional} from "./pages/additional/additional";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Shared/>} >
            <Route index element={<HomePage/>}/>
            <Route path='/additional-services' element={<Additional/>}/>
        </Route>
      </Routes>
  );
}

export default App;
