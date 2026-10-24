import styled from "styled-components";

export const Container = styled.section`
    box-sizing: border-box;
    max-width: 1806px;
    background: ${({num})=>(num===1?'#8081BD': num===2? '#FFF6D1': num===3?'#F3ACC8':'#79BC6D')};
    margin: auto;
    padding: 50px 193px;
    border-radius: 20px;
    display: flex;
    position: relative;
    margin-bottom: 64px;
    ${({$style})=>($style&&'margin-top: 64px;')};
    @media (min-width: 721px) {
        max-width: min(1806px, calc(100vw - 48px));
    }
    @media (max-width: 1805px) {
        padding: 50px 80px;
    }
    @media (max-width: 1279px) {
        flex-direction: column;
        padding: ${({num})=>(num===2 || num===3 ? '40px 40px 320px' : '40px 40px 290px')};
    }
    @media (max-width: 720px) {
        flex-direction: column;
        box-sizing: border-box;
        padding: ${({num})=>(num===1?'33px 18px 245px': num===2? '33px 18px 280px': num===3?'33px 18px 280px':'33px 18px 245px')};
        margin: 0 20px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 632px;
    z-index: 1;
    @media (max-width: 1279px) {
        width: 100%;
        max-width: 632px;
    }
    @media (max-width: 720px) {
        width: 100%;
        gap: 11px;
    }
`
export const Heading = styled.h1`
    color: ${({num})=>(num===1?'white': num===2? '#334155':"white")};
    font-size: 40px;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`
export const Description = styled.p`
    color: ${({num})=>(num===1?'white': num===2? '#334155':"white")};
    font-size: 20px;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`
export const Wrap = styled.div`
display: flex;
    gap: 16px;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`
export const Input = styled.input`
    background:${({num})=>(num===1 || num===3 || num===4 ? 'white':  '#FDDC4E')};
    border-radius: 50px;
    outline: none;
    border: none;
    padding: 14px 20px;
    width: calc((100% - 16px)/2);
    box-sizing: border-box;
    @media (max-width: 720px) {
        width: 100%;
    }
`
export const Btn = styled.button`
    background: ${({num})=>(num===1 || num===3 || num===4?'#F6B31F':  '#EA5D4A')};
    border-radius: 50px;
    color: ${({num})=>(num===1?'#334155': 'white')};
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    width: calc((100% - 16px)/2);
    @media (max-width: 720px) {
        width: 100%;
    }
`
export const Label = styled.label`
    position: relative;
    cursor: pointer;
    display: flex;
    gap: 13px;
    color: ${({num})=>(num===1|| num === 3 || num===4?'white': '#334155')};
    font-size: 10px;
    font-weight: 600;
    align-items: center;
    @media (max-width: 720px) {
        display: none;
    }
`
export const LabelMobile = styled(Label)`
    display: none;
    @media (max-width: 720px) {
        display: flex;
    }
`

export const Policy = styled.input`
    opacity: 0;
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    margin: 0;
    cursor: pointer;
    z-index: 2;
`
export const Check = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    background:${({num})=>(num===1|| num === 3 || num===4 ?'white': '#334155')}  ;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    pointer-events: none;
    box-sizing: border-box;
    border: 4px solid ${({num})=>(num===1|| num === 3 || num===4?'white':  '#334155')};

    ${Policy}:checked + & {
        background: #EA5D4A; /* green when checked */
    }
`
export const Img = styled.img`
    position: absolute;
    bottom:${({num})=>(num===1?'-54px': num === 2? '-59px':'-57px')} ;
    right: 56px;
    z-index: 0;
    @media (max-width: 1805px) {
        width: min(939px, calc(100% - 788px));
        height: auto;
    }
    @media (max-width: 1279px) {
        width: auto;
        height: 300px;
        bottom: ${({num})=>(num===1?'-32px': num === 2? '-35px':num === 3?'-34px':'-32px')};
        right: 50%;
        transform: translateX(50%);
    }
    @media (max-width: 720px) {
        height: 266px;
        bottom:${({num})=>(num===1?'-28px': num === 2? '-31px':num === 3?'-30px':'-28px')} ;
        right: 50%;
        transform: translateX(50%);
    }
`