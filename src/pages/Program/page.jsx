import {Back, BackWrap} from "../../components/navigation/backWrap";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";
import {
    Group,
    GroupDesc,
    GroupImg,
    GroupText,
    GroupTitle,
    Inner,
    TopWrap,
} from "./styled";

const text =
    "Specialists work in this group (educators and an English teacher). The day follows a gentle " +
    "routine. The child's day is structured (daily schedule, requirements). The group has a limited " +
    "number of children, healthy meals and organized nutrition (daily routine), without medication. " +
    "This is how the specialist's day goes and who provides the service.";

const groups = [
    {title: "Group (2-3 years)", text, img: "/img/video/1.png"},
    {title: "Group (3-5 years)", text, img: "/img/video/2.png"},
    {title: "Group (5-7 years)", text, img: "/img/video/3.png"}
];

export const Program = () => {
    return (
        <>
            <TopWrap>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/schedule/program'>Schedule</Back>
                    <Back active to='/schedule/program'>Program</Back>
                </BackWrap>

                <Title>Program</Title>
            </TopWrap>

                <Inner>
                    {groups.map((group, i) => (
                        <Group key={i} $reverse={i % 2 === 1}>
                            <GroupImg img={group.img}/>
                            <GroupText>
                                <GroupTitle>{group.title}</GroupTitle>
                                <GroupDesc>{group.text}</GroupDesc>
                            </GroupText>
                        </Group>
                    ))}
                </Inner>

            <QuestionsForm num={3}/>
            <Map/>
        </>
    )
}
