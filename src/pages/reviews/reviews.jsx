import {Btn, City, Container, Text, Item, List, Name, Title, NameWrap} from "./styled";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Map} from "../../components/maps/maps";

export const Reviews = () =>{

    const reviews = [
        {id:1,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},{id:2,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},
        {id:12,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},{id:22,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},
        {id:13,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},{id:23,name:'Kyrylo',city:'Kyiv',text:'We bring two children, we are very happy with the level and quality of education, if you just need a kindergarten, then this is not the place for you. The children know English (pronunciation, grammar, etc.)'},
    ]

    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us'>About us</Back>
                    <Back active to='/about-us/reviews'>Reviews</Back>
                </BackWrap>
                <Title>Reviews</Title>
                <List>
                    {reviews.map(review => (
                        <Item key={review.id} review={review} >
                            <NameWrap>
                                <Name>{review.name}</Name>
                                <City>{review.city}</City>
                            </NameWrap>

                            <Text>{review.text}</Text>
                            <Btn>Read the review</Btn>
                        </Item>
                    ))}
                </List>
            </Container>
            <QuestionsForm num={3}/>
            <Map/>
        </>
    )
}