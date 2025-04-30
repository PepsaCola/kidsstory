import {Hero} from "./hero/hero";
import {MainInfo} from "./mainInfo/mainInfo";
import {QuestionsForm} from "./questionsForm/questionsForm";
import {AdditionalServices} from "./additionalServices/additionalServices";

export const HomePage = () => {
    return (
        <>
            <Hero/>
            <MainInfo/>
            <QuestionsForm/>
            <AdditionalServices/>

        </>
    )
}