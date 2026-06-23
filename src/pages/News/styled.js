import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const SeeMore = styled.button`
    display: block;
    margin: 36px auto 70px;
    background: none;
    border: none;
    color: #334155;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    cursor: pointer;
`
