import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 46px auto;
    @media (max-width: 720px) {
        max-width: 100%;
        margin: 24px 20px;
    }
`

export const Btn = styled.button`
    text-transform: uppercase;
    padding: 10px;
    background-color: #8081BD ;
    color: white;
    border: none;
    outline: none;
    box-sizing: border-box;
    border-radius: 50px;
    @media (max-width: 720px) {
        width: 100%;
        font-size: 12px;
        height: 40px;
        padding: 0;
        margin-bottom: 24px;
    }
`


export const Description = styled.p`
    font-weight: 500;
    color: #334155; 
    font-size: 20px;
    max-width: 1000px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const SectionsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: calc((100% - 40px)/3);
    gap: 33px;
    @media (max-width: 720px) {
        width: 100%;
        gap: 25px;
    }
`
export const Img = styled.img`
    border-radius: 20px;
    height: 324px;
    @media (max-width: 720px) {
        height: 197px;
    }
`

export const SectionsList= styled.ul`
    display: flex;
    gap: 20px;
    margin-top: 46px;
    @media (max-width: 720px) {
        flex-wrap: wrap;
    }
`
export const SectionsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const SectionTitle = styled.h3`
    color: #8081BD; font-size: 24px;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`
export const SectionText = styled.p`
    color: #334155; font-size: 14px;
    font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
