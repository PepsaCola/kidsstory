import styled from "styled-components";
import {ReactComponent as Teleg} from "../../img/icons/telegram.svg";
import {Link} from "react-router-dom";

export const HeaderBar = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fff;
    transition: box-shadow 0.25s ease, padding 0.25s ease;
    padding: ${({ $scrolled }) => ($scrolled ? "12px 0" : "24px 0")};
    box-shadow: ${({ $scrolled }) => ($scrolled ? "0 6px 24px rgba(15, 23, 42, 0.08)" : "none")};
`

export const Header1 = styled.header`
    position: relative;
    z-index: 20;
    display: flex;
    max-width: 1420px;
    margin: 0 auto;
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
export const Item = styled(Link)`
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
// ==========HEADER DROPDOWN=============

export const NavItem = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ $open }) => ($open ? "#8081BD" : "#334155")};
    transition: color 0.2s ease;

    &:hover {
        color: #8081BD;
    }
`

export const Chevron = styled.svg`
    width: 11px;
    height: 11px;
    transition: transform 0.25s ease;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    display: block;
    left: 0;
    right: 0;
    background: linear-gradient(to left, rgb(83, 84, 136), rgb(96, 97, 157));
    padding: 24px;
    z-index: 50;
    animation: dropIn 0.22s ease;
    width: 100%;
    @keyframes dropIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const DropdownGrid = styled.div`
    display: flex;
    gap: 70px;
    align-items: center;
    justify-self: center;
`

export const DropdownItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 14px;
    transition: background 0.2s ease;
`

export const DropItemIcon = styled.span`
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #EFEFFA;
    color: #8081BD;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
        height: 22px;
    }
`

export const DropItemTitle = styled.span`
    display: block;
    color: white;
    font-size: 20px;
    font-weight: 500;
`

export const DropItemDesc = styled.span`
    display: block;
    color: #94A3B8;
    font-size: 12px;
    margin-top: 2px;
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
export const FooterItem  = styled(Link)`
    color: #334155; font-size: 12px;
    font-weight: 500;
`