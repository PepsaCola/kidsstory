import {Container, Icon, Item, List, Text, Title} from "./styled";

export const AdditionalServices = () =>{

    const services = [
        { icon: "/img/addSevices/yoga.svg", text: "Yoga" },
        { icon: "/img/addSevices/montessori.svg", text: "Montessori group with unique wooden equipment" },
        { icon: "/img/addSevices/golf.svg", text: "Golf for kids" },
        { icon: "/img/addSevices/bike.svg", text: "Balance bike training" },
        { icon: "/img/addSevices/lego.svg", text: "Lego building and construction" },
        { icon: "/img/addSevices/plastics.svg", text: "Dough plastics and clay plastics" },
        { icon: "/img/addSevices/oratory.svg", text: "Rhetoric and oratory" },
        { icon: "/img/addSevices/climbing.svg", text: "Rock climbing lessons" },
        { icon: "/img/addSevices/dramatization.svg", text: "Dramatization in English" },
        { icon: "/img/addSevices/cooking.svg", text: "Cooking and Table Service Etiquette" },
        { icon: "/img/addSevices/sand.svg", text: "Sand therapy. Work on interactive tables and boards" },
    ]

    return (
        <Container>
        <Title>Additional services</Title>
            <List>
                {services.map((service, index) => (
                    <Item key={index}>
                        <Icon src={service.icon} alt={service.text} />
                        <Text>{service.text}</Text>
                    </Item>
                ))}
            </List>
        </Container>
    )
}