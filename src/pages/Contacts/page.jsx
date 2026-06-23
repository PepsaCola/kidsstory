import {Back, BackWrap} from "../../components/navigation/backWrap";
import {
    Address,
    AddressLink,
    Check,
    Container,
    Email,
    Form,
    FormBox,
    FormDesc,
    FormTitle,
    Info,
    Input,
    Phone,
    Row,
    Soc,
    Socials,
    Submit,
    Textarea,
    Wrap
} from "./styled";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {useState} from "react";
import {SuccessModal} from "../../components/modals/SuccessModal/SuccessModal";

export const Contacts = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        e.target.reset();
    };

    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back active to='/contacts'>Contacts</Back>
                </BackWrap>

                <Title>Contacts</Title>

                <Wrap>
                    <Info>
                        <Phone href="tel:+74951233425">
                            <svg viewBox="0 0 24 24" fill="#EA5D4A" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z"/>
                            </svg>
                            +380 (68) 000 00 00
                        </Phone>

                        <Email href="mailto:dir@kidsstory.life">dir@kidsstory.life</Email>

                        <Address>Kyiv, Khreshchatyk 1</Address>
                        <AddressLink href="#">
                          Vyshneve residential complex, <span>Boyarskiy rajon</span>
                        </AddressLink>

                        <Socials>
                            <Soc href="#" aria-label="Telegram">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5 4.5 2.5 11.8l5.4 1.7 1.9 5.8 2.7-3 4.4 3.2L21.5 4.5Z"
                                          stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                                    <path d="m7.9 13.5 9-6.4-6.6 6.9" stroke="currentColor" strokeWidth="1.6"
                                          strokeLinejoin="round"/>
                                </svg>
                            </Soc>
                        </Socials>
                    </Info>

                    <FormBox>
                        <FormTitle>Sign up for a personal tour</FormTitle>
                        <FormDesc>Fill out the form and visit our kindergarten at a time that suits you.</FormDesc>

                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Input name="name" placeholder="Your name"/>
                                <Input name="email" type="email" placeholder="Your e-mail"/>
                            </Row>
                            <Row>
                                <Input name="phone" placeholder="Enter your phone number"/>
                                <Check htmlFor="contacts-policy">
                                    <input id="contacts-policy" name="policy" type="checkbox"/>
                                    I accept the terms of the user agreement
                                </Check>
                            </Row>
                            <Textarea name="comment" placeholder="Comment"/>
                            <Submit type="submit">SIGN UP</Submit>
                        </Form>
                    </FormBox>
                </Wrap>
            </Container>

            <Map/>
            <QuestionsForm num={3} styled={true}/>

            {sent && <SuccessModal onClose={() => setSent(false)}/>}
        </>
    )
}
