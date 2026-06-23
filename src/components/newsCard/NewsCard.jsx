import {Card, CardImg, CardText, CardTitle, More, PubDate} from "./styled";

export const NewsCard = ({item}) => {
    return (
        <Card to={`/about-us/news/${item.id}`}>
            <CardImg img={item.img}/>
            <PubDate>Publication date: <span>{item.date}</span></PubDate>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
            <More>Read more</More>
        </Card>
    )
}
