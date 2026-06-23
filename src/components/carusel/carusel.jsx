import Slider from "react-slick";
import {Container, List, NavBtn} from "./styled";

export const Carusel = ({arr,Item}) => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <NavBtn className={className + 'slick-next'} onClick={onClick}>
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.207402 1.21132C-0.0691313 0.934307 -0.0691313 0.484734 0.207402 0.207724C0.483935 -0.0692863 0.932735 -0.0692863 1.20927 0.207724L12.6061 11.6242C12.8826 11.9012 12.8826 12.3507 12.6061 12.6278L1.20927 24.0442C0.932733 24.3212 0.483933 24.3212 0.2074 24.0442C-0.0691333 23.7672 -0.0691333 23.3176 0.2074 23.0406L11.1033 12.126L0.207402 1.21132Z"
                        fill="currentColor"/>
                </svg>
            </NavBtn>
        );
    }


    function SamplePrevArrow(props) {
        const {className, onClick} = props;
        return (
            <NavBtn className={className + 'slick-prev'} onClick={onClick}>
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.6061 23.0406C12.8826 23.3176 12.8826 23.7672 12.6061 24.0442C12.3295 24.3212 11.8807 24.3212 11.6042 24.0442L0.207408 12.6278C-0.0691254 12.3508 -0.0691253 11.9012 0.207408 11.6242L11.6042 0.207757C11.8807 -0.0692526 12.3295 -0.0692526 12.6061 0.207757C12.8826 0.484767 12.8826 0.934341 12.6061 1.21135L1.71021 12.126L12.6061 23.0406Z"
                        fill="currentColor"/>
                </svg>

            </NavBtn>
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };

    return (
        <Container>
            <List >
                <Slider {...settings}>
                    {arr.map((item, index) => (
                        <Item

                            item={item}
                            key={item.id ?? `item-${index}`}
                            index={index}
                        />

                    ))}
                </Slider>
            </List>
        </Container>
    )
}