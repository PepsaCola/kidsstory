import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 46px auto;
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
`

export const Title = styled.h2`
    color: #8081BD;
    font-size: 40px;
    margin:45px 0 25px;
`
export const Description = styled.p`
    font-weight: 500;
    color: #334155; 
    font-size: 20px;
    max-width: 1000px;
`
export const ImgList = styled.ul`
display: flex; 
    gap: 20px;
    margin:45px 0 65px;
`
export const Img = styled.img`
width: calc((100% - 40px) / 3);
    border-radius: 20px
`
export const SectionsList= styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
export const SectionsItem = styled.li`
    width: calc((100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const SectionTitle = styled.h3`
    color: #8081BD; font-size: 24px;
`
export const SectionText = styled.p`
    color: #334155; font-size: 14px;
    font-weight: 500;
`
