import {Back, BackWrap} from "../../components/navigation/backWrap";
import { Container, NameCell, Table, TableWrap, Th, TimeCell, Tr} from "./styled";
import {Title} from "../../components/Title/Title";
import {QuestionsForm} from "../../components/questionsForm/questionsForm";
import {Map} from "../../components/maps/maps";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const times = ["10.00", "10.00", "10.00 - 15.00", "10.00", "10.00", "10.00", "10.00"];

const services = [
    "Choreography from 3 years",
    "Additional service available from 3 years, three lines of description text here",
    "Drawing from 2-5 years",
    "Additional service available from 3 years, three lines of description text here",
    "Choreography from 3 years",
    "Drawing from 2-3 years",
    "Choreography from 2-3 years",
    "Additional service available from 3 years, three lines of description text here",
    "Additional service available from 2 years, three lines of description text here",
    "Choreography from 2-3 years"
];

export const ScheduleAdditionalServices = () => {
    return (
        <>
            <Container>
                <BackWrap>
                    <Back to='/'>Home</Back>
                    <Back to='/schedule/program'>Schedule</Back>
                    <Back active to='/schedule/additional-services'>Schedule of additional services</Back>
                </BackWrap>

                <Title>Schedule of additional services</Title>

                <TableWrap>
                    <Table>
                        <thead>
                            <Tr>
                                <Th $left>Service name</Th>
                                {days.map((day) => (
                                    <Th key={day}>{day}</Th>
                                ))}
                            </Tr>
                        </thead>
                        <tbody>
                            {services.map((name, i) => (
                                <Tr key={i}>
                                    <NameCell>{name}</NameCell>
                                    {times.map((time, k) => (
                                        <TimeCell key={k}>{time}</TimeCell>
                                    ))}
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrap>
            </Container>

            <QuestionsForm num={1}/>
            <Map/>
        </>
    )
}
