import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 0 auto;
    
`

export const List = styled.div`
    position: relative;
    max-width: 1228px;
    margin: 53px auto;
    @media (min-width: 721px) and (max-width: 1440px) {
        max-width: min(1228px, calc(100% - 152px));
    }

    .slick-list {
        margin: 0 -12px;
    }

    .slick-slide {
        padding: 0 12px;
        box-sizing: border-box;
    }

    .slick-slide > div {
        height: 100%;
    }
    @media (max-width: 720px) {
        margin: 23px auto;
    }
`;

export const NavBtn = styled.button`
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    ${({ className }) => className?.includes("slick-prev") ? "left: -90px;" : "right: -90px;"}
    @media (max-width: 1440px) {
        ${({ className }) => className?.includes("slick-prev") ? "left: -70px;" : "right: -70px;"}
    }
    background: transparent;
    color: #8081BD;
    border: 1px solid #8081BD;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
    z-index: 4;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
        background: #8081BD;
        color: #fff;
    }
    @media (max-width: 720px) {
        display: none;
    }
`
