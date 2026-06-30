import {
    Btn,
    Burger,
    Chevron,
    CloseBtn,
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
    MobileActions, MobileBtn,
    MobileCallback,
    MobileContacts,
    MobileCta,
    MobileLink,
    MobileNav,
    MobileNavBtn,
    MobilePanel,
    MobilePhone,
    MobileSocials,
    MobileSubLink,
    MobileSubList,
    NavItem,
    Overlay,
    Telegram,
    TelNum
} from "../styled";
import {Link} from "react-router-dom";
import {Fragment, useEffect, useRef, useState} from "react";

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
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const onDocClick = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenIndex(null);
            }
        };
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpenIndex(null);
                setMenuOpen(false);
            }
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

    // lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const toggle = (index) => setOpenIndex((cur) => (cur === index ? null : index));
    const close = () => setOpenIndex(null);
    const closeMenu = () => {
        setMenuOpen(false);
        setOpenIndex(null);
    };

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

                <MobileActions>
                    <Telegram/>
                    <Burger onClick={() => setMenuOpen(true)} aria-label="Open menu">
                        <img src="/icons/burger.svg" alt="Menu"/>
                    </Burger>
                </MobileActions>
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

            <Overlay $open={menuOpen} onClick={closeMenu}/>

            <MobilePanel $open={menuOpen} aria-hidden={!menuOpen}>
                <CloseBtn onClick={closeMenu} aria-label="Close menu">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M6 6 18 18 M18 6 6 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                </CloseBtn>

                <MobileNav>
                    {NAV.map((item, index) => (
                        item.submenu ? (
                            <Fragment key={index}>
                                <MobileNavBtn
                                    type="button"
                                    $open={openIndex === index}
                                    aria-expanded={openIndex === index}
                                    onClick={() => toggle(index)}
                                >
                                    {item.label}
                                    <svg viewBox="0 0 12 8" fill="none">
                                        <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </MobileNavBtn>
                                {openIndex === index && (
                                    <MobileSubList>
                                        {item.submenu.map((sub, k) => (
                                            <MobileSubLink key={k} to={sub.to} onClick={closeMenu}>
                                                {sub.label}
                                            </MobileSubLink>
                                        ))}
                                    </MobileSubList>
                                )}
                            </Fragment>
                        ) : (
                            <MobileLink key={index} to={item.to} onClick={closeMenu}>
                                {item.label}
                            </MobileLink>
                        )
                    ))}
                </MobileNav>

                <MobileCta onClick={closeMenu}>Sign up for a tour</MobileCta>

                <MobileContacts>
                    <MobilePhone href="tel:+380680000000">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                  fill="#fff"/>
                        </svg>
                        +380 (68) 000 0000
                    </MobilePhone>
                    <MobileCallback type="button" onClick={closeMenu}>Request a callback</MobileCallback>
                    <MobileSocials>
                        <Telegram/>
                    </MobileSocials>
                </MobileContacts>
            </MobilePanel>
            <MobileBtn>
                Записаться на экскурсию
            </MobileBtn>
        </HeaderBar>
    );
};
