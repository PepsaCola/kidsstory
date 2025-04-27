import {
    Address,
    Email, Footer1,
    FooterContacts, FooterItem,
    FooterList, FooterListTitle,
    FooterTelNum,
    FooterWrap,
    ListsWrap,
    Logo,
    Telegram
} from "../styled";

export const Footer = () => {
    return (
        <Footer1>
            <Logo src='/img/logo.png' />
            <FooterWrap>
                <FooterContacts>
                    <FooterTelNum>+380 (68) 000 0000</FooterTelNum>
                    <Email>dir@kidsstory.life</Email>
                    <Address>вул. Хрещатик 1</Address>
                    <Telegram/>
                </FooterContacts>
                <ListsWrap>
                    <FooterList>
                        <FooterListTitle>About Us</FooterListTitle>
                        <FooterItem>About the center</FooterItem>
                        <FooterItem>Documents</FooterItem>
                        <FooterItem>For parents</FooterItem>
                        <FooterItem>Nutrition</FooterItem>
                        <FooterItem>News</FooterItem>
                        <FooterItem>3D tour</FooterItem>
                        <FooterItem>Reviews</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterListTitle>Schedule</FooterListTitle>
                        <FooterItem>Main schedule</FooterItem>
                        <FooterItem>Additional services</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterListTitle>Program</FooterListTitle>
                        <FooterItem>Group (2-3 years)</FooterItem>
                        <FooterItem>Group (3-5 years)</FooterItem>
                        <FooterItem>Group (5-7 years)</FooterItem>
                    </FooterList>
                    <FooterListTitle>Photos and videos</FooterListTitle>
                    <FooterListTitle>Team</FooterListTitle>
                    <FooterListTitle>Contacts</FooterListTitle>
                </ListsWrap>
            </FooterWrap>


        </Footer1>
    )
}