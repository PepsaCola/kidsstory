import {team} from "../../arrs/team";
import {Container, List, Title} from "./styled";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Map} from "../../components/maps/maps";
import {TeamItem} from "./TeamItem/TeamItem";

export const Team = ()=>{
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us'>About us</Back>
                    <Back to='/about-us/team' active>Our team</Back>
                </BackWrap>
                <Title>Our team</Title>
                <List>
                    {team.map((item,index)=>(
                        <TeamItem index={index} item={item}/>
                    ))}
                </List>
            </Container>
            <MainInfo/>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}