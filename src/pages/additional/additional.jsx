import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {List1} from "./list/list";
import {Map} from "../../components/maps/maps";
import {Back, BackWrap} from "../../components/navigation/backWrap";

export const Additional = ()=>{


    return (
        <>
            <BackWrap>
                <Back to={'/'}>Home</Back>
                <Back to='/additional-services' active>Additional services</Back>
            </BackWrap>
           <List1/>
            <MainInfo/>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}