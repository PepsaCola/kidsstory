import styled from "styled-components";

export const Container = styled.div`
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 40px 0 70px;
    @media (max-width: 720px) {
        margin: 24px 0 40px;
        max-width: 100%;
        box-sizing: border-box;
    }
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
    @media (max-width: 720px) {
        font-size: 11px;
        padding: 10px 8px;
        border-width: 2px;
        white-space: normal;
    }
`

export const Tr = styled.tr``

// desktop header row: Day | Time | Activity
export const HeadRow = styled.tr`
    @media (max-width: 720px) {
        display: none;
    }
`

// mobile header row: [Time and day of the week] | Activity
export const HeadRowMobile = styled.tr`
    display: none;
    @media (max-width: 720px) {
        display: table-row;
    }
`

export const DayCell = styled.td`
    width: 180px;
    text-align: center;
    vertical-align: middle;
    color: #334155;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 2px solid #FCDE7A;
    @media (max-width: 720px) {
        width: 40px;
        font-size: 11px;
        white-space: nowrap;
    }
`

export const TimeCell = styled.td`
    width: 220px;
    padding: 13px 24px;
    color: #8081BD;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    border-bottom: ${({ $groupEnd }) => ($groupEnd ? "2px solid #FCDE7A" : "1px solid #F1F5F9")};
    @media (max-width: 720px) {
        width: auto;
        padding: 10px 8px;
        font-size: 11px;
    }
`

export const ActivityCell = styled.td`
    padding: 13px 24px;
    color: #334155;
    font-size: 15px;
    border-bottom: ${({ $groupEnd }) => ($groupEnd ? "2px solid #FCDE7A" : "1px solid #F1F5F9")};
    @media (max-width: 720px) {
        padding: 10px 8px;
        font-size: 11px;
    }
`
