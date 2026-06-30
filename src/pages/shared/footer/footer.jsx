import {
    Address,
    Email, Footer1, FooterBtn,
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
                    <FooterBtn>SITE MENU</FooterBtn>
                    <Address>вул. Хрещатик 1</Address>
                    <Telegram/>
                </FooterContacts>
                <ListsWrap>
                    <FooterList>
                        <FooterListTitle>About Us</FooterListTitle>
                        <FooterItem to='/about-us/center'>About the center</FooterItem>
                        <FooterItem to='about-us/documents'>Documents</FooterItem>
                        <FooterItem to='/about-us/parents'>For parents</FooterItem>
                        <FooterItem  to='/about-us/nutrition'>Nutrition</FooterItem>
                        <FooterItem to={'/about-us/news'}>News</FooterItem>
                        <FooterItem to={'/about-us/tour'}>3D tour</FooterItem>
                        <FooterItem to='/about-us/reviews'>Reviews</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterListTitle>Schedule</FooterListTitle>
                        <FooterItem to={'/schedule/main-schedule'}>Main schedule</FooterItem>
                        <FooterItem to={'/additional-services'}>Additional services</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterListTitle>Program</FooterListTitle>
                        <FooterItem to={"/schedule/program"}>Group (2-3 years)</FooterItem>
                        <FooterItem to={"/schedule/program"}>Group (3-5 years)</FooterItem>
                        <FooterItem to={"/schedule/program"}>Group (5-7 years)</FooterItem>
                    </FooterList>
                    <FooterItem  to="/schedule/photo-and-video">Photos and videos</FooterItem>
                    <FooterItem to={"/about-us/team"}>Team</FooterItem>
                    <FooterItem to='/contacts'>Contacts</FooterItem>
                </ListsWrap>
            </FooterWrap>

        </Footer1>
    )
}