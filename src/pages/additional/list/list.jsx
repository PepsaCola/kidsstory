import {
    Back,
    BackWrap,
    Container,
    Item,
    List,
    StyledIcon,
    Text,
    Title
} from "./styled";

// Імпортуємо SVG як компоненти
import { ReactComponent as YogaIcon } from '../../../img/addServices/yoga.svg';
import { ReactComponent as MontessoriIcon } from '../../../img/addServices/montessori.svg';
import { ReactComponent as GolfIcon } from '../../../img/addServices/golf.svg';
import { ReactComponent as LegoIcon } from '../../../img/addServices/lego.svg';
import { ReactComponent as PlasticsIcon } from '../../../img/addServices/plastics.svg';
import { ReactComponent as OratoryIcon } from '../../../img/addServices/oratory.svg';
import { ReactComponent as ClimbingIcon } from '../../../img/addServices/climbing.svg';
import { ReactComponent as DramatizationIcon } from '../../../img/addServices/dramatization.svg';
import { ReactComponent as CookingIcon } from '../../../img/addServices/cooking.svg';
import { ReactComponent as SandIcon } from '../../../img/addServices/sand.svg';
import { ReactComponent as BikeIcon } from '../../../img/addServices/bike.svg';

export const List1 = () => {
    const services = [
        { id: 1, img: '/img/addServices/back/yoga.png', icon: YogaIcon, text: 'Yoga' },
        { id: 2, img: '/img/addServices/back/montessori.png', icon: MontessoriIcon, text: 'Montessori group with unique wooden equipment' },
        { id: 3, img: '/img/addServices/back/golf.png', icon: GolfIcon, text: 'Golf for kids' },
        { id: 4, img: '/img/addServices/back/lego.png', icon: LegoIcon, text: 'Lego building and construction' },
        { id: 5, img: '/img/addServices/back/plastics.png', icon: PlasticsIcon, text: 'Dough plastics and clay plastics' },
        { id: 6, img: '/img/addServices/back/oratory.png', icon: OratoryIcon, text: 'Rhetoric and oratory' },
        { id: 7, img: '/img/addServices/back/climbing.png', icon: ClimbingIcon, text: 'Rock climbing lessons' },
        { id: 8, img: '/img/addServices/back/dramatization.png', icon: DramatizationIcon, text: 'Dramatization in English' },
        { id: 9, img: '/img/addServices/back/cooking.png', icon: CookingIcon, text: 'Cooking and Table Service Etiquette' },
        { id: 10, img: '/img/addServices/back/sand.png', icon: SandIcon, text: 'Sand therapy. Work on interactive tables and boards' },
        { id: 11, img: '/img/addServices/back/bike.png', icon: BikeIcon, text: 'Balance bike training' },
    ];

    return (
        <Container>
            <BackWrap>
                <Back to={'/'}>Home</Back>
                <Back to='/additional-services' active>Additional services</Back>
            </BackWrap>
            <Title>Additional services</Title>
            <List>
                {services.map(({ id, img, icon: IconComponent, text }) => (
                    <Item key={id} back={img}>
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
