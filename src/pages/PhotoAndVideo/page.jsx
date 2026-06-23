import {Container, List, ListItem} from "./styled";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {Title} from "../../components/Title/Title";
import {ImageCarousel} from "../../components/video/video";
import {MainInfo} from "../../components/mainInfo/mainInfo";
import {Back, BackWrap} from "../../components/navigation/backWrap";

const photos = [
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
    {img:''},
]

export const PhotoAndVideo = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/schedule/program'>Schedule</Back>
                    <Back active to='/schedule/photo-and-video'>Photos and videos</Back>
                </BackWrap>

                <Title>
                    Photos and videos
                </Title>

                <List>
                    {photos.map(photo =>
                    <ListItem>

                    </ListItem>
                    )}
                </List>

                <ImageCarousel/>

                <MainInfo/>
            </Container>

            <QuestionsForm num={3}/>
            <Map/>
        </>
    )
}