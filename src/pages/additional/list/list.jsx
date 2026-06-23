import {
    Container,
    Item,
    List,
    StyledIcon,
    Text,
    Title
} from "./styled";


import {services} from "../../service/arr";
import {Back, BackWrap} from "../../../components/navigation/backWrap";

export const List1 = () => {


    return (
        <Container>
            <BackWrap>
                <Back to={'/'}>Home</Back>
                <Back to='/additional-services' active>Additional services</Back>
            </BackWrap>
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
