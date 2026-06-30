import {Info} from "./info/info";
import {Container} from "./styled";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Title} from "../../components/Title/Title";
import {ImageCarousel} from "../../components/video/video";

export const AboutCenter = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us/center'>About us</Back>
                    <Back active to='/about-us/center'>About Center</Back>
                </BackWrap>
                <Title>About the center</Title>
            </Container>

            <Info/>
            <ImageCarousel noDisc/>
            <MainInfo/>
            <QuestionsForm num={3}/>
            <Map/>
        </>
    )
}