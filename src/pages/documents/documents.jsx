import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Container, Icon, Item, List,Text} from "./styled";
import {Certificates} from "./certificates/certificates";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {Title} from "../../components/Title/Title";

export const Documents = () => {
    const docs = [
        {id:1,doc:'/files/doc.jpg',name:'doc1'},
        {id:12,doc:'/files/doc.jpg',name:'doc2'},
        {id:13,doc:'/files/doc.jpg',name:'doc3'},
        {id:14,doc:'/files/doc.jpg',name:'doc4'},
    ]
    const certificates = [
        {img:'/files/doc.jpg',name:'doc3'},
        {img:'/files/doc.jpg',name:'doc3'},
        {img:'/files/doc.jpg',name:'doc3'},
        {img:'/files/doc.jpg',name:'doc3'},
    ]
    return (
        <>

            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us/center'>About us</Back>
                    <Back active to='/about-us/documents'>Documents</Back>
                </BackWrap>
                <Title>Documents</Title>
                <List>
                    {docs.map((item,index)=>(
                        <Item key={index} >
                            <Icon/>
                            <Text to={item.doc} target='_blank' download>{item.name}</Text>
                        </Item>
                    ))}
                </List>
                <Title>Our certificates</Title>
                <Certificates certificates={certificates} />

            </Container>
            <QuestionsForm num={2}/>
            <Map/>
        </>
    )
}