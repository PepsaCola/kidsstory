import styled from "styled-components";
import {Link} from "react-router-dom";

export const Section = styled.section`
    position: relative;
`

export const Title = styled(Link)`
    position: relative;
    z-index: 2;
    margin: 30px auto;
    max-width: 1420px;
    color: #8081BD;
    font-size: 40px;
    display: block;
    font-weight: 700;
`

export const Blob = styled.div`
    position: absolute;
    top: 35px;
    left: calc(50% - 354px);
    z-index: 1;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Crown = styled.div`
    position: absolute;
    top: 320px;
    left: calc(50% + 271px);
    z-index: 3;
    pointer-events: none;

    @media (max-width: 1100px) {
        display: none;
    }
`
