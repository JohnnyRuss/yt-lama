import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
    html{
       font-size: 62.5%;
    }

    *,
    *::after,
    *::before{
       margin:0;
       padding:0;
       box-sizing: border-box;
    };

    body{
       font-size: 1.6rem;
       background: ${({ theme }) => theme.colors.bg};
       color: ${({ theme }) => theme.colors.txt};
       font-family: 'Roboto', sans-serif;

       ::-webkit-scrollbar{
          width:1rem;
       }

       ::-webkit-scrollbar-thumb{
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.darkGray};
       }

       ::-webkit-scrollbar-track{
        border-radius:1rem;
        background: ${({ theme }) => theme.colors.gray};
       }
    }

    a{
      text-decoration: none;
    }

    a,button{
      color:inherit;
      font-size: inherit;
    }

    ul{
      list-style: none;
    }

    button{
      border:none;
      background: none;
      cursor: pointer;
    }
`;
