import {Hero} from "./hero/hero";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {AdditionalServices} from "./additionalServices/additionalServices";
import {ImageCarousel} from "./video/video";
import {Advantages} from "./advantages/advantages";
import {Team} from "./team/team";
import {About} from "./about/about";
import {Reviews} from "./reviews/reviews";
import {Container, Fig1} from "./styled";

export const HomePage = () => {
    return (
        <Container>
            <Hero/>
            <MainInfo/>
            <QuestionsForm num={1}/>
            <AdditionalServices/>
            <ImageCarousel/>
            <Advantages/>
            <Team/>
            <QuestionsForm num={2}/>
            <About/>
            <Reviews/>

            <Fig1 src={'/img/figures/Vector1.png'}/>


        </Container>
    )
}