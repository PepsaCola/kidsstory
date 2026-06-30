import styled, { keyframes } from "styled-components";

// gentle entrance
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// pink blob softly sways
const sway = keyframes`
  0%, 100% { transform: translateY(0)     rotate(0deg); }
  50%      { transform: translateY(-10px) rotate(2deg); }
`;

// yellow dots twinkle
const twinkle = keyframes`
  0%, 100% { transform: scale(1);   opacity: 0.85; }
  50%      { transform: scale(1.4); opacity: 1; }
`;

export const Container = styled.div`
position: relative;
    width: 100%;
`

export const Fig1 = styled.img`
position: absolute;
    left: 0;
    top: 769px;
    z-index: -1;
`

export const AdvantagesArea = styled.div`
    position: relative;
    width: 100%;
    z-index: -2;
`

export const WaveDecor = styled.svg`
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: clamp(340px, 27vw, 470px);
    z-index: -1;
    pointer-events: none;
    animation: ${fadeUp} 1s ease-out both;
    @media (max-width: 720px) {
        flex-shrink: 0;
    }
`

export const BlobDecor = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: clamp(160px, 13vw, 200px);
    height: auto;
    z-index: -1;
    pointer-events: none;
    animation: ${fadeUp} 1s ease-out both;

    path[fill="#F3ACC8"] {
        transform-box: fill-box;
        transform-origin: center;
        animation: ${sway} 8s ease-in-out infinite;
    }

    path[fill="#FDDC4E"] {
        transform-box: fill-box;
        transform-origin: center;
        animation: ${twinkle} 3s ease-in-out infinite;
    }
    path[fill="#FDDC4E"]:nth-of-type(3) { animation-delay: 0.4s; }
    path[fill="#FDDC4E"]:nth-of-type(4) { animation-delay: 0.8s; }

    @media (prefers-reduced-motion: reduce) {
        &, path { animation: none; }
    }
    @media (max-width: 720px) {
        display: none;
    }
`
