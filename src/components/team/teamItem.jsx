import {Img, ListItem, Name, Position, Surname} from "./styled";
import {useState} from "react";
import {TeacherModal} from "../modals/TeacherModal/TeacherModal";

export const TeamItem = ({item,index}) => {

    const [open, setOpen] = useState(false);

    return(
        <>
            <ListItem key={index} onClick={() => setOpen(true)}>
                <Img image={item.img} alt={item.text} />
                <Surname>{item.surname}</Surname>
                <Name>{item.name}</Name>
                <Position>{item.position}</Position>
                <Position>{item.experience}</Position>
            </ListItem>
            {open && <TeacherModal member={item} onClose={() => setOpen(false)} />}
        </>
    )
}