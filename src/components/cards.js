import styled from 'styled-components';

export const Card = styled.div`
    width: 250px;
    height: 245px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.darkBlue};
    display: flex;
    align-items: flex-end;
`;