import {Title} from "../../components/Title/Title";
import {Container} from "../../components/Container/Container";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Questions} from "./Questions/Questions";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

export const Parents = ()=>{
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/'>About us</Back>
                    <Back active to='/about-us/parents'>Parents</Back>
                </BackWrap>
                <Title>
                    For parence
                </Title>
                <Questions/>

            </Container>
            <QuestionsForm/>
            <Map/>
        </>
    )
}