import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 40px 0 70px;
`

export const Th = styled.th`
    background: #FCDE7A;
    color: #334155;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 24px;
    border: 3px solid #fff;
    border-radius: 10px;
    text-align: ${({ $left }) => ($left ? "left" : "center")};
    white-space: nowrap;
`

export const Tr = styled.tr``

export const DayCell = styled.td`
    width: 180px;
    text-align: center;
    vertical-align: middle;
    color: #334155;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 2px solid #FCDE7A;
`

export const TimeCell = styled.td`
    width: 220px;
    padding: 13px 24px;
    color: #8081BD;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    border-bottom: ${({ $groupEnd }) => ($groupEnd ? "2px solid #FCDE7A" : "1px solid #F1F5F9")};
`

export const ActivityCell = styled.td`
    padding: 13px 24px;
    color: #334155;
    font-size: 15px;
    border-bottom: ${({ $groupEnd }) => ($groupEnd ? "2px solid #FCDE7A" : "1px solid #F1F5F9")};
`
