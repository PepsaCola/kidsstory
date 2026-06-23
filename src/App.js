import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/home";
import {Shared} from "./pages/shared/shared";
import {Additional} from "./pages/additional/additional";
import {Service} from "./pages/service/service";
import {AboutCenter} from "./pages/aboutCenter/aboutCenter";
import {Team} from "./pages/team/team";
import {Reviews} from "./pages/reviews/reviews";
import {Documents} from "./pages/documents/documents";
import {Parents} from "./pages/AboutParents/page";
import {Nutrition} from "./pages/Nutrition/page";
import {News} from "./pages/News/page";
import {NewsArticle} from "./pages/NewsArticle/page";
import {Tour} from "./pages/Tour/page";
import {Program} from "./pages/Program/page";
import {PhotoAndVideo} from "./pages/PhotoAndVideo/page";
import {MainSchedule} from "./pages/MainSchedule/page";
import {ScheduleAdditionalServices} from "./pages/ScheduleAdditionalServices/page";
import {Contacts} from "./pages/Contacts/page";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Shared/>} >
            <Route index element={<HomePage/>}/>
            <Route path='/additional-services' element={<Additional/>}/>
            <Route path='/additional-services/:id' element={<Service/>}/>
            <Route path='/about-us/center' element={<AboutCenter/>}/>
            <Route path='/about-us/team' element={<Team/>}/>
            <Route path='/about-us/reviews' element={<Reviews/>}/>
            <Route path='/about-us/documents' element={<Documents/>}/>
            <Route path='/about-us/parents' element={<Parents/>}/>
            <Route path='/about-us/nutrition' element={<Nutrition/>}/>
            <Route path='/about-us/news' element={<News/>}/>
            <Route path='/about-us/news/:id' element={<NewsArticle/>}/>
            <Route path='/about-us/tour' element={<Tour/>}/>
            <Route path='/schedule/program' element={<Program/>}/>
            <Route path='/schedule/photo-and-video' element={<PhotoAndVideo/>}/>
            <Route path='/schedule/main-schedule' element={<MainSchedule/>}/>
            <Route path='/schedule/additional-services' element={<ScheduleAdditionalServices/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
  );
}

export default App;
