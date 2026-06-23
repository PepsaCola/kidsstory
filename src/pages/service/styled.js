import styled from "styled-components";

export const BackWrap = styled.div`
    max-width: 1420px;
    margin: 0 auto 64px;
    display: flex;
    gap: 40px;
    
`

export const ImgWrap = styled.div`
background: url(${props => props.img}) no-repeat center;
    background-size: cover;

    max-width: 1420px;
    margin:  0 auto;
    padding:336px 193px  0;
    border-radius: 20px
`
export const Text = styled.p`
    padding: 40px 275px 40px 30px ;
    background-color: #EA5D4A ;
    color: white;
    font-size: 32px;
    display: inline-block;
    border-radius: 10px;
    svg{
        margin-right: 30px;
    }
    svg > path {
        stroke: white;
    }
`
