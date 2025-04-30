import {Btn, Check, Container, Description, Form, Heading, Img, Input, Label, Policy, Wrap} from "./styled";

export const QuestionsForm = ()=>{
    return (
        <Container>
            <Form>
                <Heading>Have questions? Get a free consultation</Heading>
                <Description>Leave your phone number and we will call you back and tell you all the details about the branch</Description>
                <Wrap>
                    <Input name='number' type='text' placeholder='Enter your phone number' />
                    <Btn>SEND</Btn>
                </Wrap>
                <Label htmlFor='policy1'>
                    <Policy id="policy1" name='policy1' type='checkbox'/>
                    <Check/>
                    I accept the terms of the user agreement
                </Label>
            </Form>
            <Img  src='/img/questions.png'/>
        </Container>

    )
}