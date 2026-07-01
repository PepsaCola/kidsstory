import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 60px;
    margin: 30px 0 70px;

    @media (max-width: 900px) {
        flex-direction: column;
        margin: 24px 0;
        gap: 24px;
    }
`

/* ---------- left: contact info ---------- */

export const Info = styled.div`
    flex: 1;
`

export const Phone = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: #334155;
    font-size: 32px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 12px;

    svg {
        width: 24px;
        height: 24px;
    }
    @media (max-width: 720px) {
        font-size: 24px;
        margin-bottom: 9px;
    }
`

export const Email = styled.a`
    display: block;
    color: #334155;
    font-size: 16px;
    text-decoration: none;
    margin-bottom: 28px;
    @media (max-width: 720px) {
        margin-bottom: 20px;
    }
`

export const Address = styled.p`
    margin: 0 0 6px;
    color: #334155;
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 720px) {
        line-height: 1;
    }
`

export const AddressLink = styled.a`
    color: #334155;
    font-size: 14px;
    text-decoration: none;

    span {
        color: #8081BD;
    }
`

export const Socials = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 28px;
`

export const Soc = styled.a`
    display: inline-flex;
    align-items: center;
    color: #EA5D4A;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;

    svg {
        width: 24px;
        height: 24px;
    }
`

/* ---------- right: tour form ---------- */

export const FormBox = styled.div`
    flex: 0 0 540px;
    background: #FFF6D1;
    border-radius: 24px;
    padding: 40px;

    @media (max-width: 900px) {
        flex: 1 1 auto;
        width: 100%;
        box-sizing: border-box;
    }
    @media (max-width: 720px) {
        padding: 32px 18px;
    }
`

export const FormTitle = styled.h3`
    margin: 0 0 12px;
    color: #334155;
    font-size: 26px;
    font-weight: 700;
    @media (max-width: 720px) {
        font-size: 20px;
    }
`

export const FormDesc = styled.p`
    margin: 0 0 24px;
    color: #334155;
    font-size: 15px;
    line-height: 1.5;
    @media (max-width: 720px) {
        font-size: 12px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 560px) {
        flex-direction: column;
        align-items: stretch;
    }
`

export const Input = styled.input`
    flex: 1;
    min-width: 0;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 14px 20px;
    font-size: 14px;
    box-sizing: border-box;
    
`

export const Check = styled.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #334155;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;

    input {
        width: 18px;
        height: 18px;
        accent-color: #EA5D4A;
        flex: 0 0 auto;
    }
`

export const Textarea = styled.textarea`
    background: #fff;
    border: none;
    outline: none;
    border-radius: 16px;
    padding: 14px 20px;
    font-size: 14px;
    font-family: inherit;
    min-height: 90px;
    resize: vertical;
    box-sizing: border-box;
`

export const Submit = styled.button`
    background: #EA5D4A;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 15px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.9;
    }
`
