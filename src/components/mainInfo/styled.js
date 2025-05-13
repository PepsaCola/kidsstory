import styled from "styled-components";

export const List = styled.ul`
display: flex;
gap: 20px;
    flex-wrap: wrap;
    max-width: 1420px;
    margin: 100px auto;
`
export const Item = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    width: calc(33.3333% - 13.333px);

`
export const Text = styled.p`
    color: #334155; font-size: 16px;
`
export const Icon = styled.img`
    padding: 15px;
box-sizing: border-box;
    border-radius: 10px;
    width: 76px;
    height: 76px;
    object-fit: contain;
    flex-shrink: 0;
`