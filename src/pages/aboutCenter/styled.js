import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 0 auto;
    @media (max-width: 720px) {
        margin: 20px;
    }
`