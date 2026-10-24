import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 80px auto;
    @media (max-width: 720px) {
        width: 100%;
        margin: 24px 20px;
    }
`


export const List = styled.ul`
    display: flex;
    gap: 20px;
    @media (max-width: 720px) {
        margin-top: 24px;
        
    }
`

export const Img = styled.img`
    width: 460px;
    height: 333px;
    border-radius: 20px;
`