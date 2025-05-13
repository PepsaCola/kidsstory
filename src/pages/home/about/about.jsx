import {Container} from "../team/styled";
import {CText, Item, List, Title,Text} from "./styled";

export const About = () => {
    return (
        <Container>
            <Title>About our center</Title>
            <Text>We have created a space in which every child shows and reveals himself, develops individual features and talents.</Text>
            <CText>Our task is to make every day at Kids story happy.</CText>
            <List>
                <Item>English children's club. For children from 2 to 7 years old. Immersion in the language environment, own kitchen, protected fenced territory, medical office, salt cave.</Item>
                <Item>Additional services. For children from 2 to 18 years old. Developing studios, creative workshops, sports sections.</Item>
                <Item>Kids story - "daily development of children at 360 degrees".</Item>
            </List>
        </Container>
    )
}