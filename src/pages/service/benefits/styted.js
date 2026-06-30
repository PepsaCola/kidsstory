import styled from "styled-components";

export const Container = styled.div`
    margin: 27px 20px;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 76px;
    background-color: #F2F2FF;
    border-radius: 20px;
    padding:  50px 192px;
    max-width: 1420px;
    margin: 50px auto 96px;
    @media (max-width: 720px) {
        padding: 32px 18px;
        gap: 19px;
        margin:27px 0;
    }
`
export const ListItem = styled.li`
    width: calc((100% - 76px)/2);
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 720px) {
        width: 100%;
        gap: 9px;
    }
`
export const ItemTitle = styled.h3`
    color: #8081BD; font-size: 24px;
    @media (max-width: 720px) {
        font-size: 16px;
    }
`
export const ItemText = styled.p`
    font-weight: 500;
    color: #334155; font-size: 14px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`