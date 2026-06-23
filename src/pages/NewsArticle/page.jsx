import {useParams} from "react-router-dom";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {NewsCard} from "../../components/newsCard/NewsCard";
import {news} from "../../arrs/news";
import {
    ArticleDate,
    Block,
    Body,
    Container,
    Featured,
    InlineImg,
    InlineRow,
    InlineText,
    Latest,
    LatestGrid,
    LatestTitle,
    Para,
    Share,
    ShareLabel,
    Soc,
    SubHeading
} from "./styled";

export const NewsArticle = () => {
    const {id} = useParams();
    const article = news.find((item) => String(item.id) === id) ?? news[0];
    const latest = news.filter((item) => item.id !== article.id).slice(0, 3);

    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us/news'>News</Back>
                    <Back active to={`/about-us/news/${article.id}`}>{article.title}</Back>
                </BackWrap>

                <Title>{article.title}</Title>
                <ArticleDate>Publication date: <span>{article.date}</span></ArticleDate>

                <Featured img={article.img}/>

                <Body>
                    <Para>{article.body.lead}</Para>

                    {article.body.blocks.map((block, i) => (
                        block.img ? (
                            <InlineRow key={i}>
                                <InlineImg img={block.img}/>
                                <InlineText>
                                    <SubHeading>{block.title}</SubHeading>
                                    <Para>{block.text}</Para>
                                </InlineText>
                            </InlineRow>
                        ) : (
                            <Block key={i}>
                                <SubHeading>{block.title}</SubHeading>
                                <Para>{block.text}</Para>
                            </Block>
                        )
                    ))}

                    <Share>
                        <ShareLabel>Share:</ShareLabel>
                        <Soc href="#" aria-label="Telegram">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 4.5 2.5 11.8l5.4 1.7 1.9 5.8 2.7-3 4.4 3.2L21.5 4.5Z"
                                      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                                <path d="m7.9 13.5 9-6.4-6.6 6.9" stroke="currentColor" strokeWidth="1.6"
                                      strokeLinejoin="round"/>
                            </svg>
                        </Soc>
                        <Soc href="#" aria-label="VK">VK</Soc>
                    </Share>
                </Body>

                <Latest>
                    <LatestTitle>Latest news</LatestTitle>
                    <LatestGrid>
                        {latest.map((item) => (
                            <NewsCard key={item.id} item={item}/>
                        ))}
                    </LatestGrid>
                </Latest>
            </Container>

            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}
