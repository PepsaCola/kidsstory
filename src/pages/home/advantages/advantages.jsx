import {Container,Description, Icon, Item, List, Title,Text} from "./styled";

export const Advantages = ()=>{
    const listCont = [
        {icon:'/img/advantages/master.svg',text:'Master classes',back:'#F6B31F'},
        {icon:'/img/advantages/games.svg',text:'Quest games',back:'#F3ACC8'},
        {icon:'/img/advantages/projects.svg',text:'Conferences and projects',back:'#8081BD'},
        {icon:'/img/advantages/experiments.svg',text:'Experiences and experiments',back:'#0E95D3'},
        {icon:'/img/advantages/concerts.svg',text:'Experiences and experiments',back:'#F6B31F'},
        {icon:'/img/advantages/competitions.svg',text:'Competitions',back:'#F3ACC8'}
    ]
    return (
        <Container>
            <Title>Advantages</Title>
            <Description>Our author's program is conducted in Ukrainian and English and consists of exciting events</Description>
            <List>
                {listCont.map((item, index) => (
                    <Item key={index} item={item}>
                        <Icon src={item.icon} alt={item.text} back={item.back}/>
                        <Text>{item.text}</Text>
                    </Item>))}
            </List>
        </Container>
    )
}