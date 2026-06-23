import styled from "styled-components";
import {ReactComponent as Doc} from "../../img/icons/doc.svg";
import {Link} from "react-router-dom";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
`
export const Title = styled.h2`
    color: #8081BD; font-size: 40px;
    margin-bottom: 41px;
    margin-top: 53px;
`
export const List = styled.ul`
display: flex;
    flex-direction: column;
    gap: 37px;
`
export const Item = styled.li`
display: flex;
    align-items: center;
    gap: 33px;
    
`
export const Icon = styled(Doc)`
width: 42px;
    height: 56px;
`
export const Text = styled(Link)`
    color: #8081BD; font-size: 20px;
    font-weight: 600;
`