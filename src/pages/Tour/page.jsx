import {Container, TourBox} from "./styled";
import {Title} from "../../components/Title/Title";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

export const Tour = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us'>About us</Back>
                    <Back to='/about-us/team' active>Our team</Back>
                </BackWrap>
                <Title>
                    3D tour
                </Title>
                <TourBox>

                </TourBox>
            </Container>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}