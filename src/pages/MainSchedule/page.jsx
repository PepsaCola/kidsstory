import {Title} from "../../components/Title/Title";
import {ActivityCell, Container, DayCell, Table, Th, TimeCell, Tr} from "./styled";
import {Back, BackWrap} from "../../components/navigation/backWrap";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

const schedule = [
    {
        day: "Mon",
        rows: [
            {time: "8.30 - 9.00", activity: "Psychologist observation"},
            {time: "9.15 - 9.30", activity: "Music"},
            {time: "9.40 - 10.00", activity: "Mathematics"},
            {time: "10.05 - 10.35", activity: "Modeling / Appliqué"}
        ]
    },
    {
        day: "Tue",
        rows: [
            {time: "9.00 - 9.20", activity: "Physical education (indoor)"},
            {time: "9.25 - 9.45", activity: "Speech development"},
            {time: "9.50 - 10.10", activity: "Reading fiction and folklore"}
        ]
    },
    {
        day: "Wed",
        rows: [
            {time: "9.25 - 9.45", activity: "English lesson"},
            {time: "9.50 - 10.10", activity: "Music"},
            {time: "10.15 - 10.35", activity: "Drawing"}
        ]
    },
    {
        day: "Thu",
        rows: [
            {time: "9.00 - 9.20", activity: "Physical education (indoor)"},
            {time: "9.30 - 9.50", activity: "Exploring the world around"},
            {time: "9.55 - 10.15", activity: "English game with a speech therapist"}
        ]
    },
    {
        day: "Fri",
        rows: [
            {time: "9.00 - 9.20", activity: "Drawing"},
            {time: "9.25 - 9.45", activity: "Rhythmics"},
            {time: "11.10 - 11.30", activity: "Physical education (outdoor)"}
        ]
    }
];

export const MainSchedule = () => {
    return (
        <>
            <Container>

                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/schedule/program'>Schedule</Back>
                    <Back active to='/schedule/main-schedule'>Main schedule</Back>
                </BackWrap>

                <Title>Main schedule</Title>

                <Table>
                    <thead>
                        <Tr>
                            <Th>Day of the week</Th>
                            <Th>Time</Th>
                            <Th $left>Joint play activity</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {schedule.flatMap((group, gi) =>
                            group.rows.map((row, ri) => {
                                const last = ri === group.rows.length - 1;
                                return (
                                    <Tr key={`${gi}-${ri}`}>
                                        {ri === 0 && (
                                            <DayCell rowSpan={group.rows.length}>{group.day}</DayCell>
                                        )}
                                        <TimeCell $groupEnd={last}>{row.time}</TimeCell>
                                        <ActivityCell $groupEnd={last}>{row.activity}</ActivityCell>
                                    </Tr>
                                );
                            })
                        )}
                    </tbody>
                </Table>

            </Container>
            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}
