import styled from "styled-components";
import {ReactComponent as Teleg} from "../../img/icons/telegram.svg";

export const Header1 = styled.header`
display: flex;
    max-width: 1420px;
    margin: 36px auto ;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.img`
    width: 192px;
    height: 43px;
`
export const List = styled.ul`
display: flex;
gap: 20px;
    align-items: center;
`
export const Item = styled.li`
    color: #334155;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    
`

export const ContactBtns = styled.div`
display: flex;
gap: 25px;
    align-items: center;
`
export const TelNum = styled.p`
    color: #334155;
    font-size: 20px;
`
export const Telegram = styled(Teleg)`
    width: 32px;
    height: 32px;
    cursor: pointer;
`
export const Btn = styled.button`
border: none;
    box-sizing: border-box;
    background: #8081BD;
    border-radius: 50px;
    color: white; 
    font-size: 12px;
    font-weight: 700;
    padding: 12px;
`
// ==========FOOTER=============

export const Footer1 = styled.footer`
    max-width: 1420px;
    margin: 56px  auto;
`
export const FooterWrap = styled.div`
display: flex;
    justify-content: space-between;
    gap: 66px;
`
export const FooterContacts = styled.div`
display: flex;
    flex-direction: column;
`
export const FooterTelNum = styled.p`
    color: #334155; font-size: 40px;
`
export const Email = styled.a`
    color: #334155; font-size: 16px;
`
export const Address = styled.a`
    color: #334155; font-size: 14px;
    margin-bottom: 40px;
`
export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const ListsWrap = styled.div`
display: flex;
gap: 66px;
    
`
export const FooterListTitle = styled.h4`
    color: #334155; font-size: 14px;
    font-weight: 600;
    margin-bottom:15px ;
`
export const FooterItem  = styled.li`
    color: #334155; font-size: 12px;
    font-weight: 500;
`