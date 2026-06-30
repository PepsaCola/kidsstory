import {Background, Container, Description, Title, Wrap} from "./styled";
import {Form} from "./form/form";

export const Hero = () => {
    return (
        <Container>

            <Background>
                <Wrap>
                    <Title>Kidsstory</Title>
                    <Description>English children
                        garden and club
                    </Description>
                </Wrap>
                <Form/>
            </Background>

        </Container>
    )
}