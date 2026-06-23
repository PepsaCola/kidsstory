import {ItemText, ItemTitle, List, ListItem, Title} from "./styted";

export const Benefits = ()=>{

    const benefits = [
        {id:1, title:'Prevention of diseases of the musculoskeletal system',text:'Swimming effectively develops and strengthens the muscles of the shoulder girdle, arms, legs, abdomen and back. This helps to develop correct posture and endurance in the child.'},
        {id:2, title:'Prevention of diseases of the musculoskeletal system',text:'Swimming effectively develops and strengthens the muscles of the shoulder girdle, arms, legs, abdomen and back. This helps to develop correct posture and endurance in the child.'},
        {id:3, title:'Prevention of diseases of the musculoskeletal system',text:'Swimming effectively develops and strengthens the muscles of the shoulder girdle, arms, legs, abdomen and back. This helps to develop correct posture and endurance in the child.'},
        {id:4, title:'Prevention of diseases of the musculoskeletal system',text:'Swimming effectively develops and strengthens the muscles of the shoulder girdle, arms, legs, abdomen and back. This helps to develop correct posture and endurance in the child.'},
    ]

    return (
        <>
            <Title>Benefits for children's health</Title>
            <List>
                {benefits.map((item, index) => (
                    <ListItem key={index}>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemText>{item.text}</ItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}