import {Text, Container, Img, InfoWrap, Item, List, Name, Position, Span, Surname, NameWrap} from "./styled";

export const Info = () => {
    return (
        <Container>
            <Img src={'/img/team/Jolie.png'}/>
            <InfoWrap>
                <Position>Head of
                    kids story</Position>
                <NameWrap>
                    <Surname>Meister</Surname>
                    <Name>Kyrylo Arturovych</Name>
                    <Span>Teacher - psychologist</Span>
                    <Span>Experience 11 years</Span>
                </NameWrap>

                <Text>We have created a space in which every child expresses and reveals themselves, develops individual characteristics and talents.</Text>
                <Text red>Our goal is to make every day at Kids story happy.
                </Text>
                <List>
                    <Item>English children's club. For children from 2 to 7 years old. Immersion in the language environment, own kitchen, guarded fenced area, medical office, salt cave.</Item>
                    <Item>Additional services. For children from 2 to 18 years old. Development studios, creative workshops, sports sections.</Item>
                    <Item>Kids story - "daily development of children at 360 degrees".</Item>
                </List>
            </InfoWrap>
        </Container>
    )
}