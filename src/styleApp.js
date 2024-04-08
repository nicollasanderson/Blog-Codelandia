import styled from "styled-components"

export const MainContent = styled.div`
    background-color: ${props => props.theme.colors.dark10};
    width: 100dvw;
    height: 100dvh;
    color: white;
    font-family: 'Inter', sans-serif;
    overflow: auto;


    .brand_text__color{
        color: ${props => props.theme.colors.brandColor};
    }
    .blog_tittle__h1{
        font-family: "Space Grotesk", sans-serif;
        font-weight: 500;
        font-size: 4rem;
    }
    .search__section{
        background-color: ${props => props.theme.colors.dark20};
        height: 210px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 50px 0;
    }

    .input__wrapper{
        background-color: ${props => props.theme.colors.dark30};
        width: 70%;
        display: flex;
        border: 2px solid ${props => props.theme.colors.dark40};
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        gap: 10px;

        button{
            background-color: ${props => props.theme.colors.dark30};
            border: none;
            cursor: pointer;
        }
        svg{
            width: 20px;
            height: 20px;
        }
        input{
            width: 100%;
            border: none;
            background-color: ${props => props.theme.colors.dark30};
            color: white;
            font-size: 20px;
            font-weight: 500;
            &:focus {
                outline: none;
            }   
        }
        &:focus-within {
            border-color: white;
        }
    }
    .main__cards{
        display: flex;
        justify-content: center;
        > div{
            width: 60%;
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 50px 0;
            gap: 20px;
        }
    }

    .section__wrapper{
        width: 70%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 50px;
    }

    @media (max-width: 700px) {
        .blog_tittle__h1{
            font-size: 2.5rem;
        }
        .section__wrapper{
            width: 100%;
        }
        .main__cards{
            div{
                width: 90%;
            }
        }
    }
`