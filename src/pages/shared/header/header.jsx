import {Btn, ContactBtns, Header1, Item, List, Logo, Telegram, TelNum} from "../styled";

export const Header = () => {
    return (
        <Header1>
            <Logo src='/img/logo.png' />
            <List>
                <Item>About us</Item>
                <Item>Schedule</Item>
                <Item>Program</Item>
                <Item>Photos and videos</Item>
                <Item>Team</Item>
                <Item>Contacts</Item>
            </List>
            <ContactBtns>
                <TelNum>+380 (68) 000 0000</TelNum>
                <Telegram/>
                <Btn>Sign up for a tour</Btn>
            </ContactBtns>
        </Header1>
    )
}