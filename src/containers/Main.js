import React from 'react';
import styled from 'styled-components';
// import { Card } from '../components/cards';

const Wrapper =  styled.div`
    width: 1100px;
    height: 520px;
    //background-color: ${props => props.theme.colors.lightRedStudy} ;
    display: grid;
    gap: 25px 25px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
        "profile cardWork cardPlay cardStudy"
        "profile cardExercise cardSocial cardSelfCare"
    ;
`;

const ProfileCard = styled.div`
    grid-area: profile;
    width: 250px;
    height: 520px;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 25px;
`;

const Card = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.darkBlue};
    display: flex;
    align-items: flex-end;
`;

const CardWork = styled(Card)`
    grid-area: cardWork;
    background: ${props => props.theme.colors.lightRedWork};
`;

const CardPlay = styled(Card)`
    grid-area: cardPlay;
    background-color: ${props => props.theme.colors.softBluePlay};
`;

const CardStudy = styled(Card)`
    grid-area: cardStudy;
    background-color: ${props => props.theme.colors.lightRedStudy};
`;

const CardExercise = styled(Card)`
    grid-area: cardExercise;
    background-color: ${props => props.theme.colors.limeGreenExercise};
`;

const CardSocial = styled(Card)`
    grid-area: cardSocial;
    background-color: ${props => props.theme.colors.violetSocial};
`;

const CardSelfCare = styled(Card)`
    grid-area: cardSelfCare;
    background-color: ${props => props.theme.colors.softOrangeSelfcare};
`;

const InnerCard = styled.div`
    width: 250px;
    height: 200px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.darkBlue}; 
`;

const Main = () => {
    return (
        <Wrapper>
            <ProfileCard />
            <CardWork>
                <InnerCard>

                </InnerCard>
            </CardWork>
            <CardPlay>
                <InnerCard>
                    
                </InnerCard>
            </CardPlay>
            <CardStudy> 
                <InnerCard>
                    
                </InnerCard>
            </CardStudy>
            <CardExercise>
                <InnerCard>
                    
                </InnerCard>
            </CardExercise>
            <CardSocial>
                <InnerCard>
                    
                </InnerCard>
            </CardSocial>
            <CardSelfCare>
                <InnerCard>
                    
                </InnerCard>
            </CardSelfCare>
        </Wrapper>
    )
}

export default Main;