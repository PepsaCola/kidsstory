import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 1420px;
    margin: 0 auto;
`

export const List = styled.div`
    position: relative;
    max-width: 1228px;
    margin: 53px auto;

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
`;

export const NavBtn = styled.button`
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    ${({ className }) => className?.includes("slick-prev") ? "left: -90px;" : "right: -90px;"}
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
`
