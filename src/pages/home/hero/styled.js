import styled from "styled-components";

export const Container = styled.section`
    @media (max-width: 720px) {
        padding: 0 20px;
        
    }
`


// Ширина з відступами: 1806px = 1420px контенту + по 193px з боків, як у макеті.
// border-box, бо інакше padding додавався до 100% і форма запису виїжджала за екран
export const Background = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    max-width: 1806px;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (min-width: 721px) {
        max-width: min(1806px, calc(100vw - 48px));
    }
    @media (min-width: 1101px) {
        border-radius: 20px;
        padding: 175px clamp(48px, 10.7vw, 193px) 165px;
        flex-direction: row;
        background: url('/img/hero.png') no-repeat center;
        background-size: cover;
    }
`
export const Title = styled.h1`
    color: #334155; font-size: 96px;
    @media (max-width: 1100px) {
        font-size: 72px;
    }
    @media (max-width: 720px) {
        font-size: 40px;
    }
`
export const Description = styled.p`
    color: #334155;
    font-size: 36px;
    font-weight: 600;
    width: 400px;
    @media (max-width: 1100px) {
        font-size: 28px;
        width: 320px;
    }
    @media (max-width: 720px) {
        font-size: 14px;
        width: auto;
    }
`

export const Wrap = styled.div`
    /* Планшет: текст на жовтому тлі, під ним фото на всю ширину (1804×558, тому висота 30.9% ширини),
       щоб заголовок не лягав на обличчя дітей. Нижче форма */
    @media (min-width: 721px) and (max-width: 1100px) {
        border-radius: 20px;
        padding: 48px 40px calc((100vw - 48px) * 0.309 + 16px);
        box-sizing: border-box;
        background: #FDDC4E url('/img/hero.png') no-repeat center bottom;
        background-size: 100% auto;
    }
    @media (max-width: 720px) {
        margin-bottom: 24px;
        border-radius: 20px;
        width: 100%;
        padding:24px 18px 318px;
        box-sizing: border-box;
        background: url('/img/home-hero-mobile.png') no-repeat center ;
        background-size: cover;
    }
`