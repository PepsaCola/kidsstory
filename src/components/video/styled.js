import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 40px 0;
    max-width: 1420px;
    margin: 0 auto;
    overflow-x: hidden;
    @media (max-width: 720px) {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        overflow-x: visible;
    }
`;

export const Description = styled.p`
  color: #334155;
  font-size: 20px;
  font-weight: 500;
    @media (max-width: 720px) {
        font-size: 12px;
        margin-top: 5px;
    }
`

export const Carousel = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
`;

export const Viewport = styled.div`
    position: relative;
    width: 100%;
    height: 380px;
    overflow: hidden;
    @media (max-width: 720px) {
        width: 100%;
        height: 230px;
        margin-top: 22px;
    }
`;

export const Slide = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 650px;
    transform: translate(calc(-50% + ${({ offset }) => offset * 450}px), -50%)
        scale(${({ active }) => (active ? 1 : 0.8)});
    opacity:  ${({ offset,active }) => !active && offset!==0 ? 0.4 :(Math.abs(offset) <= 1 ? 1 : 0)};
    z-index: ${({ offset }) => 10 - Math.abs(offset)};
    transition: transform 0.5s ease, opacity 0.5s ease;
    cursor: pointer;
    pointer-events: ${({ offset }) => (Math.abs(offset) <= 1 ? 'auto' : 'none')};
    @media (max-width: 720px) {
        width: 100%;
    }
`;

export const SlideImage = styled.img`
    width: 650px;
    height: 333px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    pointer-events: none;
    @media (max-width: 720px) {
        width: 100%;
        height: 230px;
        
    }
`;

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 20;
    transition: background 0.2s ease;

    &::after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 11px 0 11px 18px;
        border-color: transparent transparent transparent #fff;
        margin-left: 5px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.35);
    }
`;

export const Pagination = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 22px;
`;

export const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background:${({ active }) => (active ? "#EA5D4A" : '#FDDC4E')};
    cursor: pointer;
    @media (max-width: 720px) {
        width: 10px;
        height: 10px;

    }
`;

export const FigGreen = styled.img`
    position: absolute;
    bottom: -65px;
    left: 317px;
    z-index: -1;
    @media (max-width: 720px) {
        width: 95px;
        bottom: -40px;
        left: -50px;
    }
`;

export const FigBlue = styled.img`
    position: absolute;
    top: -105px;
    right: 268px;
    z-index: -1;
    @media (max-width: 720px) {
        width: 120px;
        top: -24px;
        right: -61px;
    }
`;
