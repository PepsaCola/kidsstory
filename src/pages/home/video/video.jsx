import {
    Carousel,
    Dot,
    FigBlue,
    FigGreen,
    NavButton,
    Pagination,
    Slide,
    SlideImage,
    SlideTrack,
    Wrapper
} from "./styled";
import {useState} from "react";

export const ImageCarousel = () => {
    const images = [
        '/img/video/1.png',
        '/img/video/2.png',
        '/img/video/3.png',
        '/img/video/2.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <Wrapper>
            <h2>Видеогалерея нашего сада</h2>
            <p>Вы можете ознакомиться как проходят наши будни</p>

            <Carousel>
                <NavButton direction="left" onClick={prev}>
                    &#8249;
                </NavButton>
                <FigGreen src={'/img/figures/video-green.png'}/>
                <FigBlue src={'/img/figures/video-blue.png'}/>
                <SlideTrack currentIndex={currentIndex}>
                    {images.map((src, index) => (
                        <Slide key={index} active={index === currentIndex}>
                            <SlideImage src={src} alt={`Slide ${index + 1}`} />
                        </Slide>
                    ))}

                </SlideTrack>

                <NavButton direction="right" onClick={next}>
                    &#8250;
                </NavButton>
            </Carousel>

            <Pagination>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        active={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </Pagination>
        </Wrapper>
    );
};

