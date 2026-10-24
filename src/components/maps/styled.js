import styled from "styled-components";

export const Container = styled.div`
    max-width: 1804px;
    @media (min-width: 721px) {
        max-width: min(1804px, calc(100vw - 48px));
    }
    margin:0 auto;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 720px) {
        margin: 37px 20px;
    }
`