import styled from "styled-components";

export const Container = styled.section`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 80px auto;
    @media (max-width: 720px) {
        margin: 37px 20px;
    }
`

export const Text = styled.p`
    color: #334155; 
    margin-top: 24px;
    margin-bottom: 41px;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
        margin-top: 12px;
        margin-bottom: 16px;
    }
`
export const CText = styled.p`
    color: #EA5D4A; 
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 18px;
    @media (max-width: 720px) {
        font-size: 12px;
        margin-top: 12px;
        padding-bottom: 16px;
    }
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: circle;
    padding-left: 20px;
    
`
export const Item = styled.li`
    color: #334155;
    font-size: 20px;
    list-style: disc;
    @media (max-width: 720px) {
        font-size: 10px;
    }
`