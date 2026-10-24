import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 0 20px;
    }
`
export const List = styled.ul`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 60px;
    @media (max-width: 720px) {
        gap: 10px;
        margin-bottom: 27px;
    }
`
export const ListItem = styled.li`
    width: calc((100% - 40px)/3);
    height: 324px;
    background: #FFF6D1;
    border-radius: 20px;
    @media (max-width: 720px) {
        width: calc((100% - 20px)/2);
        height: 94px;
    }
`