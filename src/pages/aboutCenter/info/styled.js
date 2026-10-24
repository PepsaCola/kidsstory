import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    display: flex;
    gap: 76px;
    @media (max-width: 720px) {
        margin: 24px 20px;
        flex-direction: column;
        gap: 20px;
    }
`
export const Img = styled.img`
    width: 364px;
    height: 369px;
    border-radius: 20px;
    @media (max-width: 720px) {
        width: 100%;
        height: auto;
    }
    
`
export const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`
export const NameWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 41px;
    @media (max-width: 720px) {
        margin-bottom: 19px;
    }
`
export const Position = styled.h2`
    color: #8081BD; font-size: 32px;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`
export const Surname = styled.h3`
    color: #8081BD; font-size: 20px;
    margin-top: 31px;
    @media (max-width: 720px) {
        font-size: 16px;
        margin-top: 10px;
    }
`
export const Name = styled.h4`
    color: #334155; font-size: 20px;
    margin-bottom: 11px;
    @media (max-width: 720px) {
        font-size: 14px;
    }
`
export const Span = styled.span`
    color: #334155; font-size: 14px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const Text = styled.p`
    color: ${(props)=> props.red ? "#EA5D4A":"#334155"} ;
    font-size: 16px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const List = styled.ul`
padding-left: 20px;
    margin-top: 22px;
`
export const Item = styled.li`
    list-style: disc;
    color: #334155;
    font-size: 16px;
    @media (max-width: 720px) {
        font-size: 10px;
    }
`