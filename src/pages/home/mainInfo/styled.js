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
    width: calc((100% - 40px) / 3);
`
export const Text = styled.p``
export const Icon = styled.img`
padding: 15px;
box-sizing: border-box;
    border-radius: 10px;
    width: 76px;
    height: 76px;
`