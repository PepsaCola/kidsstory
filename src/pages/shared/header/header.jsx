import {
    Btn,
    Chevron,
    ContactBtns,
    Dropdown,
    DropdownGrid,
    DropdownItem,
    DropItemTitle,
    Header1,
    HeaderBar,
    Item,
    List,
    Logo,
    NavItem,
    Telegram,
    TelNum
} from "../styled";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";


const NAV = [
    {
        label: "About us",
        submenu: [
            {label: "About the center", to: "/about-us/center", icon: "home", desc: "Who we are"},
            {label: "Our team", to: "/about-us/team", icon: "team", desc: "Meet the teachers"},
            {label: "Reviews", to: "/about-us/reviews", icon: "chat", desc: "What parents say"},
            {label: "Documents", to: "/about-us/documents", icon: "doc", desc: "Licenses & certificates"},
            {label: "For parents", to: "/about-us/parents", icon: "heart", desc: "Useful information"},
            {label: "Nutrition", to: "/about-us/nutrition", icon: "heart", desc: "Useful information"},
            {label: "Tour", to: "/about-us/tour", icon: "heart", desc: "Useful information"},
            {label: "News", to: "/about-us/news", icon: "heart", desc: "Useful information"}
        ]
    },
    {label: "Schedule",
        submenu: [
            {label: "Program", to: "/schedule/program"},
            {label: "Main schedule", to: "/schedule/main-schedule"},
            {label: "Schedule of additional services", to: "/schedule/additional-services"},
            {label: "Photos and videos", to: "/schedule/photo-and-video"},
        ]},
    {label: "Program",
        submenu: [
            {label: "2-3 years", to: "/schedule/program",},
            {label: "3-5 years", to: "/schedule/program",},
            {label: "5-7 years", to: "/schedule/program",},

        ]},
    {label: "Photos and videos", to: "/schedule/photo-and-video"},
    {label: "Team", to: "/about-us/team"},
    {label: "Contacts", to: '/contacts'}
];

export const Header = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const onDocClick = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenIndex(null);
            }
        };
        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpenIndex(null);
        };
        const onScroll = () => setScrolled(window.scrollY > 10);

        onScroll();
        document.addEventListener("mousedown", onDocClick);
        document.addEventListener("keydown", onKeyDown);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            document.removeEventListener("mousedown", onDocClick);
            document.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const toggle = (index) => setOpenIndex((cur) => (cur === index ? null : index));
    const close = () => setOpenIndex(null);

    const openItem = openIndex !== null ? NAV[openIndex] : null;

    return (
        <HeaderBar ref={headerRef} $scrolled={scrolled}>
            <Header1>
                <Link to='/'>
                    <Logo src='/img/logo.png'/>
                </Link>

                <List>
                    {NAV.map((item, index) => (
                        item.submenu ? (
                            <NavItem
                                key={index}
                                type="button"
                                $open={openIndex === index}
                                aria-expanded={openIndex === index}
                                onClick={() => toggle(index)}
                            >
                                {item.label}
                                <Chevron $open={openIndex === index} viewBox="0 0 12 8" fill="none">
                                    <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </Chevron>
                            </NavItem>
                        ) : (
                            <Item key={index} to={item.to}>{item.label}</Item>
                        )
                    ))}
                </List>

                <ContactBtns>
                    <TelNum>+380 (68) 000 0000</TelNum>
                    <Telegram/>
                    <Btn>Sign up for a tour</Btn>
                </ContactBtns>


            </Header1>
            {openItem?.submenu && (
                <Dropdown role="menu">
                    <DropdownGrid>
                        {openItem.submenu.map((sub, k) => (
                            <DropdownItem key={k} to={sub.to} role="menuitem" onClick={close}>
                                        <DropItemTitle>{sub.label}</DropItemTitle>
                            </DropdownItem>
                        ))}
                    </DropdownGrid>
                </Dropdown>
            )}
        </HeaderBar>
    );
};
