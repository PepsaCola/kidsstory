import styled from "styled-components";



export const Title = styled.h2`
    color: #8081BD; font-size: 40px;
    max-width: 1420px;
    margin: 194px auto 0;
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
`
export const ListItem = styled.li`
width: calc((100% - 76px)/2);
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const ItemTitle = styled.h3`
    color: #8081BD; font-size: 24px;
`
export const ItemText = styled.p`
    font-weight: 500;
    color: #334155; font-size: 14px;
`