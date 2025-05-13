import {List,Item,Text,Icon} from "./styled";

export const MainInfo = () => {
    return (
        <>
        <List>
            <Item>
                <Icon src='/img/mainInfo/time.png' style={{ backgroundColor:"#F6B31F" }} />
                <Text> <b>Working hours:</b>  from 7:00 a.m. to 7:00 p.m</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/groups.png' style={{ backgroundColor:"#F3ACC8" }} />
                <Text><b>Groups:</b>  up to 15 people</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/area.png' style={{ backgroundColor:"#8081BD" }}/>
                <Text><b>Area for walks:</b>  own equipped territory for walks</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/video.png' style={{ backgroundColor:"#8081BD" }}/>
                <Text><b>Video surveillance:</b>  online</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/eng.png' style={{ backgroundColor:"#F6B31F" }}/>
                <Text><b>English environment:</b>  bilingual / expat</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/age.png'style={{ backgroundColor:"#F3ACC8" }}/>
                <Text><b>Age of children:</b>  from 1.5 to 7 years</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/med.png' style={{ backgroundColor:"#F3ACC8" }}/>
                <Text><b>Morning filter by a medical worker:</b>  daily</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/room.png' style={{ backgroundColor:"#8081BD" }}/>
                <Text><b>Premises:</b>  800 sq.m</Text>
            </Item>
            <Item>
                <Icon src='/img/mainInfo/food.png' style={{ backgroundColor:"#F6B31F" }}/>
                <Text><b>Meals:</b>  5 times, taking into account the individual characteristics of the child</Text>
            </Item>
        </List>
        </>
    );
}