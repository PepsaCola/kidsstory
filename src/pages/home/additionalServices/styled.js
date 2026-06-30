import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1420px;
    margin: 100px auto;
    @media (max-width: 720px) {
        margin: 37px 20px;
        gap: 17px;

    }
`

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
    justify-content: stretch;
    gap: 30px 20px;
    @media (max-width: 720px) {
        gap: 9px;
    }
`
export const Item = styled.li`
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 12px;
    background: #FFF6D1; border-radius: 10px;
    box-sizing: border-box;
    @media (max-width: 720px) {
        padding: 9px;
    }
`
export const Text = styled.p`
margin: auto;
    color: #334155; font-size: 16px;
    font-weight: 700;
    @media (max-width: 720px) {
        font-size: 10px;
        margin-left: 10px;
    }
`
export const Icon = styled.img`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    width: 76px;
    height: 76px;
    box-sizing: border-box;
    object-fit: contain;
    flex-shrink: 0;
    @media (max-width: 720px) {
        width: 56px;
        height: 56px;
    }
`