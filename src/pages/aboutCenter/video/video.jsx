import {Container, Img, List, Title} from "./styled";

export const Video = () =>{

    const images = [
        '/img/video/center/1.png',
        '/img/video/center/2.png',
        '/img/video/center/3.png',
    ];

    return (
        <Container>
            <Title>Our garden in video</Title>
            <List>
                {images.map(image => (
                    <Img src={image} key={image} />
                ))}
            </List>
        </Container>
    )
}