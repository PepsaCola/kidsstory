import {Img, Item} from "./styled";

export const DocItem = ({item}) => {
    return (
        <Item>
            <Img src={item.img}/>
        </Item>
    )
}