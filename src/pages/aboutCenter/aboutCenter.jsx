import {Info} from "./info/info";
import {Video} from "./video/video";
import {Title} from "./styled";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

export const AboutCenter = () => {
    return (
        <>
            <Title>About the center</Title>
            <Info/>
            <Video/>
            <MainInfo/>
            <QuestionsForm num={3}/>
            <Map/>
        </>
    )
}