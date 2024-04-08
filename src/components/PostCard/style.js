import styled from "styled-components"

export const MainDivCard = styled.div`
    background-color: ${props => props.theme.colors.dark20};
    width: 80%;
    min-height: 50px;
    border: 1px solid ${props => props.theme.colors.dark30};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-flow: column;
    gap: 10px;
    line-height: 22px;

    h1{
        font-size: 20px;
        font-weight: bold;
    }
    p{
        font-size: 14px;
    }

    &:hover{
        border-color: ${props => props.theme.colors.brandColor};
    }
    .date_heart__line{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: ${props => props.theme.colors.brandColor};
        margin-bottom: 10px;
        font-weight: bold;

        svg{
            width: 25px;
            height: 25px;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            color: inherit;
            background-color: inherit;
            border: none;
            cursor: pointer;
        }
    }
`