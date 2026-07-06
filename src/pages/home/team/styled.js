import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    width: 100%;
    padding: 27px 20px;
    box-sizing: border-box;
    max-width: 1420px;
    margin: 0 auto;
    @media (max-width: 720px) {
        
    }
`

export const Blob = styled.div`
    position: absolute;
    top: 115px;
    left: calc(50% - 354px);
    z-index: 1;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Crown = styled.div`
    position: absolute;
    top: 400px;
    left: calc(50% + 271px);
    z-index: 3;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`
