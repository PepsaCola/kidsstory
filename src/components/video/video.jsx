import {
    Carousel, Description,
    Dot,
    FigBlue,
    FigGreen,
    Pagination,
    PlayButton,
    Slide,
    SlideImage, Title,
    Viewport,
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

    const getOffset = (index) => {
        const len = images.length;
        const half = Math.floor(len / 2);
        let offset = index - currentIndex;
        if (offset > half) offset -= len;
        if (offset < -half) offset += len;
        return offset;
    };

    return (
        <Wrapper>
            <Title>Our kindergarten's video gallery</Title>
            <Description>You can get a glimpse of our everyday life</Description>

            <Carousel>
                <FigGreen src={'/img/figures/video-green.png'}/>
                <FigBlue src={'/img/figures/video-blue.png'}/>

                <Viewport>
                    {images.map((src, index) => {
                        const offset = getOffset(index);
                        return (
                            <Slide
                                key={index}
                                offset={offset}
                                active={offset === 0}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <SlideImage src={src} alt={`Slide ${index + 1}`}/>
                            </Slide>
                        );
                    })}

                    <PlayButton type="button" aria-label="Воспроизвести видео"/>
                </Viewport>
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
