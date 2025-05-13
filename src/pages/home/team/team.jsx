import {
    Container,
    Img,
    List,
    ListItem,
    Name, NavBtn,
    Position,
    Surname,
    Title
} from "./styled";
import Slider from "react-slick";

export const Team = () => {

    const team = [
        {img:"/img/team/Jolie.png",surname:'Jolie',name:'Angelina Andriivna',position:'Teacher',experience:'3 years'},
        {img:"/img/team/Such.png",surname:'Such',name:'Olena Andriivna',position:'Teacher',experience:'5 years'},
        {img:"/img/team/Jolie.png",surname:'Jolie',name:'Angelina Andriivna',position:'Teacher',experience:'3 years'},
        {img:"/img/team/Such.png",surname:'Such',name:'Olena Andriivna',position:'Teacher',experience:'5 years'},
        {img:"/img/team/Jolie.png",surname:'Jolie',name:'Angelina Andriivna',position:'Teacher',experience:'3 years'},
        {img:"/img/team/Such.png",surname:'Such',name:'Olena Andriivna',position:'Teacher',experience:'5 years'},
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
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };


    return (
        <Container>
            <Title>Our team</Title>
            <List >
                <Slider {...settings}>
                    {team.map((item, index) => (
                        <ListItem key={index}>
                            <Img image={item.img} alt={item.text} />
                            <Surname>{item.surname}</Surname>
                            <Name>{item.name}</Name>
                            <Position>{item.position}</Position>
                            <Position>{item.experience}</Position>
                        </ListItem>
                    ))}
                </Slider>
            </List>
        </Container>
    )
}