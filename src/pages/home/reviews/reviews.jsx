import Slider from "react-slick";
import { NavBtn} from "../team/styled";
import {City, Container, Img, Item, List, Name, ProfileWrap, Title,Text} from "./styled";

export const Reviews = ()=>{

    const reviews = [
        {
            id: 1,
            name: "John Doe",
            city: 'Kyiv',
            text: 'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'
        },
        {
            id: 2,
            name: "John Doe",
            city: 'Kyiv',
            text: 'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'
        },
        {
            id: 3,
            name: "John Doe",
            city: 'Kyiv',
            text: 'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'
        },
        {
            id: 4,
            name: "John Doe",
            city: 'Kyiv',
            text: 'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'
        },
        {
            id: 5,
            name: "John Doe",
            city: 'Kyiv',
            text: 'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'
        },
    ]

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <NavBtn className={className + 'slick-next'} onClick={onClick}>&#10095;</NavBtn>
        );
    }


    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <NavBtn className={className + 'slick-prev'} onClick={onClick}>&#10094;</NavBtn>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Container>
            <Title>Reviews of the garden</Title>
            <List>
                <Slider {...settings} >
                    {reviews.map((item, index) => (
                        <Item key={index}>
                            <ProfileWrap>
                                <Img/>
                                <Name>{item.name}</Name>
                                <City>{item.city}</City>
                            </ProfileWrap>
                            <Text>{item.text}</Text>
                        </Item>
                    ))}
                </Slider>
            </List>
        </Container>
    )
}