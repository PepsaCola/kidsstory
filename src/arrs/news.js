const para =
    "The programs provide knowledge in physics, mathematics, natural science and programming. " +
    "They develop critical and creative thinking, communication and social skills. The programs " +
    "give knowledge in physics, mathematics, natural science and programming and develop the " +
    "child's individual abilities and talents.";

const excerpt =
    "The programs provide knowledge in physics, mathematics, natural science and programming. " +
    "They develop critical and creative thinking, communication and social skills ...";

const makeBody = (img) => ({
    lead: para + " " + para,
    blocks: [
        {title: "Heading for the news block", text: para + " " + para},
        {title: "Heading for the news block", text: para + " " + para, img}
    ]
});

export const news = [
    {id: 1, img: "/img/news/1.png", date: "22.08.2021", title: "LEGO® Education and robotics", text: excerpt, body: makeBody("/img/news/1.png")},
    {id: 2, img: "/img/news/2.png", date: "22.08.2021", title: "Development of fine motor skills", text: excerpt, body: makeBody("/img/news/2.png")},
    {id: 3, img: "/img/news/3.png", date: "22.08.2021", title: "English-speaking environment", text: excerpt, body: makeBody("/img/news/3.png")},
    {id: 4, img: "/img/news/4.png", date: "22.08.2021", title: "Creative workshops for kids", text: excerpt, body: makeBody("/img/news/4.png")},
    {id: 5, img: "/img/news/5.png", date: "22.08.2021", title: "Sports sections and physical activity", text: excerpt, body: makeBody("/img/news/5.png")},
    {id: 6, img: "/img/news/6.png", date: "22.08.2021", title: "Preparing children for school", text: excerpt, body: makeBody("/img/news/6.png")}
];
