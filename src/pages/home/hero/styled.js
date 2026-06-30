import styled from "styled-components";

export const Container = styled.section`
    @media (max-width: 720px) {
        padding: 0 20px;
        
    }
`


export const Background = styled.div`
    width: 100%;
    padding: 0;
    max-width: 1420px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: 720px) {
        border-radius: 20px;
        padding: 175px 193px 165px;
        flex-direction: row;
        background: url('/img/hero.png') no-repeat center;
        background-size: cover;
    }
`
export const Title = styled.h1`
    color: #334155; font-size: 96px;
    @media (max-width: 720px) {
        font-size: 40px;
    }
`
export const Description = styled.p`
    color: #334155;
    font-size: 36px;
    font-weight: 600;
    width: 400px;
    @media (max-width: 720px) {
        font-size: 14px;
    }
`

export const Wrap = styled.div`
    
   
    @media (max-width: 720px) {
        margin-bottom: 24px;
        border-radius: 20px;
        width: 100%;
        padding:24px 18px 318px;
        box-sizing: border-box;
        background: url('/img/home-hero-mobile.png') no-repeat center ;
        background-size: cover;
    }
`