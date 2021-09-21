import styled from 'styled-components';
import iconWork from '../../images/icon-work.svg'
import iconExercise from '../../images/icon-exercise.svg';
import iconPlay from '../../images/icon-play.svg';
import iconSelfCare from '../../images/icon-self-care.svg';
import iconSocial from '../../images/icon-social.svg';
import iconStudy from '../../images/icon-study.svg';
import { Card } from '../../components/cards'

export const Wrapper =  styled.div`
    width: 1100px;
    height: 520px;
    display: grid;
    gap: 25px 25px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
        "profile cardWork cardPlay cardStudy"
        "profile cardExercise cardSocial cardSelfCare"
    ;
`;

export const ProfileCard = styled.div`
    grid-area: profile;
    width: 250px;
    height: 520px;
    background-color: var(--darkBlue);
    border-radius: 25px;
`;

export const ProfileData = styled.div`
    width: 190px;
    height: 290px;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 25px;
    padding: 30px;

    .reportfor {
        font-size: 0.85em;
        color: ${props => props.theme.colors.paleBlue};
        line-height: 1.5em;
        margin-top:30px;
    }

    .name {
        font-size: 2.5em;
        font-weight: 300;
        line-height: 1.1em;
    }
`;

export const ProfileImage = styled.img`
    border: 3px solid white;
    border-radius: 180px;
    width: 80px;
`;

export const ProfileSchedule = styled.div`
    width: 190px;
    height: 140px;
    padding: 10px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const ScheduleLink = styled.p`
    font-size: 1.1em;
    text-decoration: none;
    color: ${props => props.theme.colors.desaturatedBlue};
    cursor: pointer;
    transition: 200ms;

    &:hover {
        color: white;
    }
`;

export const CardWork = styled(Card)`
    grid-area: cardWork;
    background: ${props => props.theme.colors.lightRedWork} url(${iconWork}) no-repeat;
    background-position: top -10px right 15px;
`;

export const CardPlay = styled(Card)`
    grid-area: cardPlay;
    background: ${props => props.theme.colors.softBluePlay} url(${iconPlay}) no-repeat;
    background-position: top -7px right 15px;
`;

export const CardStudy = styled(Card)`
    grid-area: cardStudy;
    background: ${props => props.theme.colors.lightRedStudy} url(${iconStudy}) no-repeat;
    background-position: top -10px right 15px;
`;

export const CardExercise = styled(Card)`
    grid-area: cardExercise;
    background: ${props => props.theme.colors.limeGreenExercise} url(${iconExercise}) no-repeat;
    background-position: top 0px right 15px;
`;

export const CardSocial = styled(Card)`
    grid-area: cardSocial;
    background: ${props => props.theme.colors.violetSocial} url(${iconSocial}) no-repeat;
    background-position: top -15px right 15px;
`;

export const CardSelfCare = styled(Card)`
    grid-area: cardSelfCare;
    background: ${props => props.theme.colors.softOrangeSelfcare} url(${iconSelfCare}) no-repeat;
    background-position: top -10px right 15px;
`;

export const InnerCard = styled.div`
    width: 190px;
    height: 160px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.darkBlue}; 
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: 200ms;

    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    span {
        font-weight:500;
        font-size: 1em;
    }


    .hours {
        font-size: 3em;
        font-weight: 300;
    }

    .schedule {
        font-size: 0.85em;
        color: ${props => props.theme.colors.paleBlue};
    }

    &:hover {
        background-color: ${props => props.theme.colors.darkBlueHover};
        cursor: pointer;
    }
`;