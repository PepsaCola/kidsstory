import {Btn, City, Container, Text, Item, List, Name, NameWrap, ItemHeader, Avatar, Img} from "./styled";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Map} from "../../components/maps/maps";
import {Title} from "../../components/Title/Title";

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
                    <Back to='/about-us/center'>About us</Back>
                    <Back active to='/about-us/reviews'>Reviews</Back>
                </BackWrap>
                <Title>Reviews</Title>
                <List>
                    {reviews.map(review => (
                        <Item key={review.id} review={review} >
                            <ItemHeader>
                                <Avatar>
                                    <Img width="27" height="28" viewBox="0 0 27 28" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">

                                        <circle cx="13.5" cy="7" r="5.5" stroke="white" stroke-width="3"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M25.5 26C25.5 19.3726 20.1274 14 13.5 14C6.87258 14 1.5 19.3726 1.5 26"
                                            stroke="white" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </Img>
                                </Avatar>
                                <NameWrap>
                                    <Name>{review.name}</Name>
                                    <City>{review.city}</City>
                                </NameWrap>
                            </ItemHeader>


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