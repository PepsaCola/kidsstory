import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {List1} from "./list/list";
import {Map} from "../../components/maps/maps";

export const Additional = ()=>{


    return (
        <>
           <List1/>
            <MainInfo/>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}