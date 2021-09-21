import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    /* :root{
        --blue: 'hsl(246, 80%, 60%)',
        --lightRedWork: 'hsl(15, 100%, 70%)',
        --softBluePlay:'hsl(195, 74%, 62%)',
        --lightRedStudy: 'hsl(348, 100%, 68%)',
        --limeGreenExercise: 'hsl(145, 58%, 55%)',
        --violetSocial: 'hsl(264, 64%, 52%)',
        --softOrangeSelfcare: 'hsl(43, 84%, 65%)',
        --veryDarkBlue: 'hsl(226, 43%, 10%)',
        --darkBlue: 'hsl(235, 46%, 20%)',
        --darkBlueHover: 'hsl(235, 46%, 33%)',
        --desaturatedBlue: 'hsl(235, 45%, 61%)',
        --paleBlue: 'hsl(236, 100%, 87%)',
    } */

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
    
    .ellipsis {
        color: ${props => props.theme.colors.paleBlue};
        vertical-align: middle;
        transition: 200ms;

        &:hover{
            color: white;
        }
    }
`;