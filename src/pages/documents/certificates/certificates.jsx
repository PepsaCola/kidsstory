import {Carusel} from "../../../components/carusel/carusel";
import {DocItem} from "./docItem/docItem";

export const Certificates = ({certificates}) =>{
    return (
        <>
            <Carusel arr={certificates} Item={DocItem}/>
        </>
    )
}