import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const popIn = keyframes`
    0% { opacity: 0; transform: translateY(24px) scale(0.9); }
    60% { transform: translateY(-6px) scale(1.02); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const draw = keyframes`
    to { stroke-dashoffset: 0; }
`;

const pop = keyframes`
    0% { transform: scale(0.4); opacity: 0; }
    70% { transform: scale(1.08); }
    100% { transform: scale(1); opacity: 1; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(128, 129, 189, 0.55);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
    animation: ${fadeIn} 0.25s ease;
`;

export const Card = styled.div`
    position: relative;
    background: #fff;
    border-radius: 28px;
    padding: 56px 60px 46px;
    max-width: 480px;
    width: 100%;
    text-align: center;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.25);
    animation: ${popIn} 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;

export const Close = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #F1F1FA;
    color: #8081BD;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease, transform 0.25s ease;

    &:hover {
        background: #E5E5F5;
        transform: rotate(90deg);
    }
`;

export const IconWrap = styled.div`
    width: 96px;
    height: 96px;
    margin: 0 auto 26px;
    animation: ${pop} 0.5s ease both 0.1s, ${float} 3s ease-in-out 0.7s infinite;
`;

export const Circle = styled.circle`
    fill: #ECF7E8;
    stroke: #79BC6D;
    stroke-width: 4;
    stroke-dasharray: 295;
    stroke-dashoffset: 295;
    animation: ${draw} 0.6s ease forwards 0.25s;
`;

export const CheckPath = styled.path`
    fill: none;
    stroke: #79BC6D;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 62;
    stroke-dashoffset: 62;
    animation: ${draw} 0.35s ease forwards 0.7s;
`;

export const Heading = styled.h3`
    margin: 0 0 12px;
    color: #8081BD;
    font-size: 30px;
    font-weight: 700;
`;

export const Text = styled.p`
    margin: 0 0 28px;
    color: #94A3B8;
    font-size: 16px;
    line-height: 1.5;
`;

export const Ok = styled.button`
    background: #8081BD;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 13px 46px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.15s ease;

    &:hover { opacity: 0.92; }
    &:active { transform: scale(0.97); }
`;
