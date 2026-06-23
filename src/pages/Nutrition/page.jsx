import {Back, BackWrap} from "../../components/navigation/backWrap";
import {
    Container,
    Content,
    Dish,
    DishName,
    Featured,
    Leader,
    MealSection,
    MealTitle,
    Play,
    Sidebar,
    Thumb,
    Thumbs,
    VideoRow,
    VideoTile,
    Weight,
    Wrap
} from "./styled";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

const dishes = (count) => Array.from({length: count}, () => ({name: "Dish 1", weight: "250 g"}));

const menu = [
    {title: "1st breakfast", dishes: dishes(3)},
    {title: "2nd breakfast", dishes: dishes(4)},
    {title: "Lunch", dishes: dishes(4)},
    {title: "Afternoon snack", dishes: dishes(3)},
    {title: "Dinner", dishes: dishes(3)}
];

const featured = "/img/nutrition/big.png";
const gallery = Array.from({length: 8}, (_, i) => `/img/nutrition/${i + 1}.png`);
const videos = ["/img/video/1.png", "/img/video/2.png", "/img/video/3.png"];

export const Nutrition = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/about-us/center'>About us</Back>
                    <Back active to='/about-us/nutrition'>Nutrition</Back>
                </BackWrap>

                <Title>Nutrition</Title>

                <Wrap>
                    <Sidebar>
                        {menu.map((section, i) => (
                            <MealSection key={i}>
                                <MealTitle>{section.title}</MealTitle>
                                {section.dishes.map((dish, k) => (
                                    <Dish key={k}>
                                        <DishName>{dish.name}</DishName>
                                        <Leader/>
                                        <Weight>{dish.weight}</Weight>
                                    </Dish>
                                ))}
                            </MealSection>
                        ))}
                    </Sidebar>

                    <Content>
                        <Featured img={featured}/>
                        <Thumbs>
                            {gallery.map((src, i) => (
                                <Thumb key={i} img={src}/>
                            ))}
                        </Thumbs>
                    </Content>
                </Wrap>

                <VideoRow>
                    {videos.map((src, i) => (
                        <VideoTile key={i} img={src}>
                            <Play type="button" aria-label="Play video"/>
                        </VideoTile>
                    ))}
                </VideoRow>
            </Container>

            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}
