import {createPortal} from "react-dom";
import {useEffect} from "react";
import {Card, CheckPath, Circle, Close, Heading, IconWrap, Ok, Overlay, Text} from "./styled";

export function SuccessModal({onClose}) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <Overlay onClick={onClose}>
            <Card onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <Close type="button" onClick={onClose} aria-label="Close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </Close>

                <IconWrap>
                    <svg width="96" height="96" viewBox="0 0 100 100" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <Circle cx="50" cy="50" r="47"/>
                        <CheckPath d="M30 52 L44 66 L72 36"/>
                    </svg>
                </IconWrap>

                <Heading>Your request has been sent!</Heading>
                <Text>Thank you, we will get in touch with you shortly.</Text>
                <Ok type="button" onClick={onClose}>Great</Ok>
            </Card>
        </Overlay>,
        document.body
    );
}
