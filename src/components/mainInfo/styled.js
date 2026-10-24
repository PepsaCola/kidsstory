import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const MainInfoWrap = styled.section`
    position: relative;
    width: 100%;
    @media (max-width: 720px) {
        padding:0 20px;
        box-sizing: border-box;
    }
`

export const WaveDecor = styled.svg`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: clamp(340px, 27vw, 470px);
    z-index: -1;
    pointer-events: none;
    animation: ${fadeIn} 1s ease-out both;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`

export const List = styled.ul`
display: flex;
gap: 20px;
    flex-wrap: wrap;
    max-width: 1420px;
    @media (min-width: 721px) {
        max-width: min(1420px, calc(100vw - 48px));
    }
    margin: 100px auto;
    position: relative;
    @media (max-width: 720px) {
        margin: 37px 0;
    }
`
export const Item = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    width: calc(33.3333% - 13.333px);
    @media (max-width: 900px) {
        width: calc((100% - 20px)/2);
    }
    @media (max-width: 720px) {
        width: calc((100% - 20px)/2);
        flex-direction: column;
        align-items: center;
    }
`
export const Text = styled.p`
    color: #334155; font-size: 16px;
    @media (max-width: 720px) {
        text-align: center;
        font-size: 10px;
    }
`
export const Icon = styled.img`
    padding: 15px;
    box-sizing: border-box;
    border-radius: 10px;
    width: 76px;
    height: 76px;
    object-fit: contain;
    flex-shrink: 0;
    @media (max-width: 720px) {
        width: 56px;
        height: 56px;
    }
`
