import {
    Btn,
    Container,
    Description,
    Img,
    ImgList,
    SectionsItem,
    SectionsList,
    SectionText,
    SectionTitle,
    Title
} from "./styled";

export const About = () => {

    const imgs =  [
        {id:1, img:'/img/video/1.png'},
        {id:12, img:'/img/video/2.png'},
        {id:13, img:'/img/video/3.png'},
    ]

    const sections = [
        {id:1, title:'Section 1', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
        {id:2, title:'Section 2', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
        {id:3, title:'Section 3', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
        {id:4, title:'Section 4', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
        {id:5, title:'Section 5', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
        {id:6, title:'Section 6', text:"According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier."},
    ]

    return (
        <Container>
            <Btn>sign up for the first lesson</Btn>
            <Title>About our center</Title>
            <Description>According to the results of a study by Australian scientists from the Griffith Institute for Educational Research, children who regularly swim grow up smarter, physically and emotionally healthier. A private pool with a comfortable temperature, modern, safe for the child's health cleaning methods and a professional trainer - all this can be found in the Far Away Kingdom in Kiev.</Description>
            <ImgList>
                {imgs.map((item, index) => (
                    <Img src={item.img} />
                ))}
            </ImgList>
            <SectionsList>
                {sections.map((item, index) => (
                    <SectionsItem key={index}>
                        <SectionTitle>{item.title}</SectionTitle>
                        <SectionText>{item.text}</SectionText>
                    </SectionsItem>
                ))}
            </SectionsList>

        </Container>
    )
}