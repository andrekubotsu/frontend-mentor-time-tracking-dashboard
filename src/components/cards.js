import styled from 'styled-components';

export const Card = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.darkBlue};
    display: flex;
    flex-direction: column-reverse;
    align-items: baseline;

    @media screen and (max-width: 1120px){
        width: 320px;
        height: 160px;
    }
`;