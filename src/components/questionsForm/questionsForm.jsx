import {
    Btn,
    Check,
    Container,
    Description,
    Form,
    Heading,
    Img,
    Input,
    Label,
    LabelMobile,
    Policy,
    Wrap
} from "./styled";

export const QuestionsForm = ({num,styled})=>{
    console.log(styled)
    return (
        <Container num={num} $style={styled}>
            <Form>
                <Heading num={num}>{num === 1 || num === 4 ? "Have questions? Get a free consultation":"Do you have any questions? Get it\n" +
                    "free consultation"}</Heading>
                <Description num={num}>Leave your phone number and we will call you back and tell you all the details about the branch</Description>
                <Wrap>
                    <Input num={num} name='number' type='text' placeholder='Enter your phone number' />
                    <LabelMobile num={num} htmlFor={'policy'+ num}>
                        <Policy id={'policy'+ num} name={'policy'+ num} type='checkbox'/>
                        <Check num={num}/>
                        I accept the terms of the user agreement
                    </LabelMobile>
                    <Btn num={num}>SEND</Btn>
                </Wrap>
                <Label num={num} htmlFor={'policy'+ num}>
                    <Policy id={'policy'+ num} name={'policy'+ num} type='checkbox'/>
                    <Check num={num}/>
                    I accept the terms of the user agreement
                </Label>
            </Form>
            <Img num={num} src={num === 1 ? '/img/questions.png': num === 2 ? '/img/questions1.png':num===3? "/img/questions2.png":'/img/questions.png'}/>
        </Container>

    )
}