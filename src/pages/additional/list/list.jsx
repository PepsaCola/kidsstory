import {
    Container,
    Item,
    List,
    StyledIcon,
    Text
} from "./styled";


import {services} from "../../service/arr";
import {Title} from "../../../components/Title/Title";

export const List1 = () => {


    return (
        <Container>

            <Title>Additional services</Title>
            <List>
                {services.map(({ id, img, icon: IconComponent, text }) => (

                        <Item
                            key={id}
                            to={`/additional-services/${id}`}
                            state={{ service: { id} }}
                            back={img}>
                            <Text>
                                <StyledIcon>
                                    <IconComponent />
                                </StyledIcon>
                                {text}
                            </Text>
                        </Item>


                ))}
            </List>
        </Container>
    );
};
