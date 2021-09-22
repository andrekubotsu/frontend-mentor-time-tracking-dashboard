import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    body {
        height: 100vh;
        width: 100vw;
        background-color: ${props => props.theme.colors.veryDarkBlue};
        font-family: ${props => props.theme.fonts.rubik};
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    
    @media screen and (max-width: 1120px){
        body {
            height: 1400px;
            width: 100vw;
            background-color: ${props => props.theme.colors.veryDarkBlue};
            font-family: ${props => props.theme.fonts.rubik};
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }
    }
    
    .ellipsis {
        color: ${props => props.theme.colors.paleBlue};
        vertical-align: middle;
        transition: 200ms;

        &:hover{
            color: white;
        }
    }
`;