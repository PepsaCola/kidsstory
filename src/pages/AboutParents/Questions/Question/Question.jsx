import {useState} from "react";
import {ArrowIcon, QuestionBtn, QuestionContext, QuestionWrap} from "./styled";

export const Question = ({children,title})=>{
    const [open, setOpen] = useState()
    return(
        <QuestionWrap>
            <QuestionBtn $open={open} onClick={()=>setOpen(!open)}>
                <ArrowIcon $open={open} version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path
                        d="M4.60888 11.8081L4.60888 7.22405L0.000875056 7.22405L0.000875056 4.58405L4.60888 4.58405V4.95911e-05L7.34488 4.95911e-05L7.34488 4.58405H11.9529V7.22405H7.34488V11.8081H4.60888Z"
                        fill="currentColor"/>

                </ArrowIcon>
                {title}
            </QuestionBtn>
            <QuestionContext $open={open}>
                {children}
            </QuestionContext>
        </QuestionWrap>
    )
}