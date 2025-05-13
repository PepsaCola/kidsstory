import {Container, Icon, Item, List, Text, Title} from "./styled";

export const AdditionalServices = () =>{

    const services = [
        { icon: "/img/addServices/yoga.svg", text: "Yoga" },
        { icon: "/img/addServices/montessori.svg", text: "Montessori group with unique wooden equipment" },
        { icon: "/img/addServices/golf.svg", text: "Golf for kids" },
        { icon: "/img/addServices/bike.svg", text: "Balance bike training" },
        { icon: "/img/addServices/lego.svg", text: "Lego building and construction" },
        { icon: "/img/addServices/plastics.svg", text: "Dough plastics and clay plastics" },
        { icon: "/img/addServices/oratory.svg", text: "Rhetoric and oratory" },
        { icon: "/img/addServices/climbing.svg", text: "Rock climbing lessons" },
        { icon: "/img/addServices/dramatization.svg", text: "Dramatization in English" },
        { icon: "/img/addServices/cooking.svg", text: "Cooking and Table Service Etiquette" },
        { icon: "/img/addServices/sand.svg", text: "Sand therapy. Work on interactive tables and boards" },
    ]

    return (
        <Container>
        <Title to='/additional-services'>Additional services</Title>

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