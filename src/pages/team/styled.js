import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 0 20px;
    }
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 61px 95px ;
    @media (max-width: 720px) {
        flex-direction: column;
        width: 100%;
        gap: 24px;
        margin-top:24px ;
    }
`