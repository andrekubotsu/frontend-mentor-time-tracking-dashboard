import React from 'react';
import * as Cards from './style';
import { IoEllipsisHorizontal } from 'react-icons/io5'; 
import { IconContext } from 'react-icons/lib';
import profileImage from '../../images/image-jeremy.png';

const Main = () => {
    return (
        <IconContext.Provider value={{className: 'ellipsis'}}>
        <Cards.Wrapper>
            <Cards.ProfileCard>
                <Cards.ProfileData>
                    <Cards.ProfileImage src={profileImage} />
                    <p className="reportfor">Report for</p>
                    <p className="name">Jeremy Robson</p>
                </Cards.ProfileData>
                <Cards.ProfileSchedule>
                    <p><a href="http://">Daily</a></p>
                    <p><a href="http://">Weekly</a></p>
                    <p><a href="http://">Monthly</a></p>
                </Cards.ProfileSchedule>
            </Cards.ProfileCard>
            <Cards.CardWork>
                <Cards.InnerCard>
                    <div className="title"><span>Work</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">32hrs</p>
                    <p className="schedule">Last Week - 36hrs</p>
                </Cards.InnerCard>
            </Cards.CardWork>
            <Cards.CardPlay>
                <Cards.InnerCard>
                    <div className="title"><span>Play</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">10hrs</p>
                    <p className="schedule">Last Week - 8hrs</p>
                </Cards.InnerCard>
            </Cards.CardPlay>
            <Cards.CardStudy> 
                <Cards.InnerCard>
                    <div className="title"><span>Study</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">4hrs</p>
                    <p className="schedule">Last Week - 7hrs</p>
                </Cards.InnerCard>
            </Cards.CardStudy>
            <Cards.CardExercise>
                <Cards.InnerCard>
                    <div className="title"><span>Exercise</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">4hrs</p>
                    <p className="schedule">Last Week - 5hrs</p>
                </Cards.InnerCard>
            </Cards.CardExercise>
            <Cards.CardSocial>
                <Cards.InnerCard>
                    <div className="title"><span>Social</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">32hrs</p>
                    <p className="schedule">Last Week - 10hrs</p>
                </Cards.InnerCard>
            </Cards.CardSocial>
            <Cards.CardSelfCare>
                <Cards.InnerCard>
                    <div className="title"><span>Self Care</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <p className="hours">2hrs</p>
                    <p className="schedule">Last Week - 2hrs</p>
                </Cards.InnerCard>
            </Cards.CardSelfCare>
        </Cards.Wrapper>
        </IconContext.Provider>
    )
}

export default Main;