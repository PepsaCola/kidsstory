import {useLocation} from "react-router-dom";
import {ImgWrap, Text} from "./styled";
import {services} from "./arr";
import {About} from "./about/about";
import {Benefits} from "./benefits/benefits";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Map} from "../../components/maps/maps";


export const Service = () =>{

    const { state } = useLocation();
    const service = state?.service;

    if (!service) return <div>Service not found</div>;
    const {id} = service;

    const {img, icon: IconComponent, text} = services.find(item => item.id === id);

    return (
        <>
            <BackWrap>
                <Back to={'/'}>Home</Back>
                <Back to='/additional-services' active>Additional services</Back>
            </BackWrap>
            <ImgWrap img={img}>
                <Text>
                    <IconComponent/>
                    {text}
                </Text>
            </ImgWrap>
            <About/>
            <Benefits/>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}