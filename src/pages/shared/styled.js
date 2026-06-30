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
    @media (max-width: 720px) {
        padding:  18px 20px;
    }
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

    @media (max-width: 1024px) {
        display: none;
    }
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

    @media (max-width: 1024px) {
        display: none;
    }
`
export const TelNum = styled.p`
    color: #334155;
    font-size: 20px;
`
export const Telegram = styled(Teleg)`
    width: 32px;
    height: 32px;
    cursor: pointer;
    @media (max-width: 1024px) {
        
    }
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

    @media (max-width: 1024px) {
        display: none;
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

export const TopLeftDecor = styled.svg`
    top: 190px;
    left: -45px;
    position: absolute;
    z-index: -1;
`
export const TopRightDecor = styled.svg`
    position: absolute;
    top: 556px;
    right: -15px;
    z-index: -1;
`

// ==========FOOTER=============
export const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`
export const Footer1 = styled.footer`
    max-width: 1420px;
    margin: 56px  auto;
    position: relative;
    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 37px 20px;
    }
`
export const FooterDecor = styled.svg`
    position: absolute;
    bottom: -70px;
    right: -50px;
    @media (max-width: 720px) {
        display: none;
    }
`
export const FooterWrap = styled.div`
display: flex;
    justify-content: space-between;
    gap: 66px;
    width: 100%;
`
export const FooterContacts = styled.div`
display: flex;
    flex-direction: column;
    @media (max-width: 720px) {
        align-items: center;
        width: 100%;
    }
`
export const FooterTelNum = styled.p`
    color: #334155; font-size: 40px;
    @media (max-width: 720px) {
        font-size: 24px;
        margin-top: 24px;
        margin-bottom: 9px;
    }
`
export const Email = styled.a`
    color: #334155; font-size: 16px;
`
export const FooterBtn = styled.button`
    background-color: #EA5D4A;
    width: 100%;
    border-radius: 50px;
    border: none;
    outline: none;
    height: 40px;
    display: none;
    color: white; 
    font-weight: bold;
    font-size: 16px;
    margin-top: 21px;
    margin-bottom: 27px;
    @media (max-width: 720px) {
        display: block;
    }
`
export const Address = styled.a`
    color: #334155; font-size: 14px;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
        margin-bottom: 22px;
    }
`
export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const ListsWrap = styled.div`
    display: flex;
    gap: 66px;
    @media (max-width: 720px) {
        display: none;
    }
    
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

// ==========MOBILE MENU=============

// right-side cluster shown only on mobile: telegram + burger
export const MobileActions = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 18px;
    }
`

export const Burger = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 6px;
    cursor: pointer;

    img {
        width: 30px;
        height: 16px;
        display: block;
    }
`

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(15, 23, 42, 0.45);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const MobilePanel = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: min(86%, 360px);
    z-index: 1001;
    box-sizing: border-box;
    padding: 22px 28px 32px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background: linear-gradient(160deg, rgba(96, 97, 157, 0.92), rgba(83, 84, 136, 0.95));
    backdrop-filter: blur(6px);
    box-shadow: -10px 0 40px rgba(15, 23, 42, 0.25);
    transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
    transition: transform 0.3s ease;
`
export const MobileBtn = styled.button`
    display: none;
    width: 100%;
    background-color: #EA5D4A;
    border-radius: 50px;
    height: 40px;
    border: none;
    outline: none;
    color: white;
    margin-top: 17px;
    @media (max-width: 720px) {
        display: block;
    }
`
export const CloseBtn = styled.button`
    align-self: flex-end;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 6px;
    margin-bottom: 8px;

    svg {
        display: block;
        width: 26px;
        height: 26px;
    }
`

export const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
`

export const MobileNavBtn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-family: inherit;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 12px 0;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    svg {
        width: 12px;
        height: 8px;
        transition: transform 0.25s ease;
        transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    }
`

export const MobileLink = styled(Link)`
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 12px 0;
`

export const MobileSubList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding: 2px 0 10px;
`

export const MobileSubLink = styled(Link)`
    color: rgba(255, 255, 255, 0.82);
    font-size: 14px;
    font-weight: 500;
`

export const MobileCta = styled.button`
    align-self: center;
    margin-top: 24px;
    background: #fff;
    color: #334155;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    padding: 14px 26px;
    cursor: pointer;
`

export const MobileContacts = styled.div`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

export const MobilePhone = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 8px;
`

export const MobileCallback = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.75);
    font-family: inherit;
    font-size: 12px;
`

export const MobileSocials = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 10px;

    svg {
        width: 28px;
        height: 28px;
        filter: brightness(0) invert(1); /* render the icon white on the purple panel */
    }
`