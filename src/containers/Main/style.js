import styled, {css} from 'styled-components';
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

    @media screen and (max-width: 1120px){
        width: 100%;
        height: 1300px;
        gap: 20px 20px;
        grid-template-columns: 1fr;
        grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: 
            "profile" 
            "cardWork" 
            "cardPlay" 
            "cardStudy"
            "cardExercise" 
            "cardSocial" 
            "cardSelfCare"
        ;
    }
`;

export const ProfileCard = styled.div`
    grid-area: profile;
    width: 250px;
    height: 520px;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 20px;

    @media screen and (max-width: 1120px){
        width: 320px;
        height: 200px;
    }
`;

export const ProfileData = styled.div`
    width: 180px;
    height: 280px;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 20px;
    padding: 35px;

    .reportfor {
        font-size: 0.85em;
        color: ${props => props.theme.colors.paleBlue};
        line-height: 1.5em;
        margin-top:35px;
    }

    .name {
        font-size: 2.5em;
        font-weight: 300;
        line-height: 1.1em;
    }

    @media screen and (max-width: 1120px){
        width: 260px;
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .mobileDisplay {
            margin-left:20px;
        }

        .reportfor {
            font-size: 0.85em;
            line-height: 2em;
            margin-top:0px;
        }

        .name {
            font-size: 1.5em;
            font-weight: 300;
            line-height: 1.1em;
        }
    }
`;

export const ProfileImage = styled.img`
    border: 3px solid white;
    border-radius: 180px;
    width: 75px;
    height: 75px;

    @media screen and (max-width: 1120px){
        width: 60px;
        height: 60px;
    }
`;

export const ProfileSchedule = styled.div`
    width: 190px;
    height: 140px;
    padding: 10px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 1120px){
        width: 260px;
        height: 60px;
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
        padding: 0px 30px 0px 30px;
    }
`;

export const ScheduleLink = styled.p`
    font-size: 1.1em;
    text-decoration: none;
    ${props => props.isActive ? css`color: white` : css`color: ${props => props.theme.colors.desaturatedBlue}`};
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
    height: 165px;
    border-radius: 20px;
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
        font-size: 3.5em;
        font-weight: 300;
    }

    .schedule {
        font-size: 1em;
        color: ${props => props.theme.colors.paleBlue};
    }

    .hoursDisplay {
        p{
            margin-top: 10px;
        }
    }

    &:hover {
        background-color: ${props => props.theme.colors.darkBlueHover};
        cursor: pointer;
    }

    @media screen and (max-width: 1120px){
        width: 260px;
        height: 80px;
        padding: 20px 30px 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

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
            font-size: 2em;
            font-weight: 300;
        }

        .schedule {
            font-size: 0.85em;
            color: ${props => props.theme.colors.paleBlue};
        }

        .hoursDisplay {
            margin-top: 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
`;