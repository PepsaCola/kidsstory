import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Container, Grid, SeeMore} from "./styled";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {NewsCard} from "../../components/newsCard/NewsCard";
import {news} from "../../arrs/news";

export const News = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us/center'>About us</Back>
                    <Back active to='/about-us/news'>News</Back>
                </BackWrap>

                <Title>News</Title>

                <Grid>
                    {news.map((item) => (
                        <NewsCard key={item.id} item={item}/>
                    ))}
                </Grid>

                <SeeMore type="button">See more news</SeeMore>
            </Container>

            <QuestionsForm num={4}/>
        </>
    )
}
