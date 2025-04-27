import {Btn, Check, Description, FormBox, Inp, InpWrap, Policy, PolicyLabel, Title} from "./styled";

export const Form  = () => {
    return (
        <FormBox>
            <Title>Sign up
                on personal
                excursion</Title>
            <Description>Fill out the form and see
                I use the kindergarten in a convenient way
                it's your time</Description>
            <InpWrap>
                <Inp placeholder={"Your name"}/>
                <Inp placeholder={"Your number"}/>
                <Inp placeholder={"Your email"}/>
            </InpWrap>

            <PolicyLabel htmlFor='policy'>
                <Policy id='policy' name='policy' type='checkbox'/>
                <Check/>
                I accept the terms
                user agreement
            </PolicyLabel>
            <Btn>to sign up</Btn>
        </FormBox>
    )
}