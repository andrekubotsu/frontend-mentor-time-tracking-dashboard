import React, { useState } from 'react';
import * as Cards from './style';
import { IoEllipsisHorizontal } from 'react-icons/io5'; 
import { IconContext } from 'react-icons/lib';
import profileImage from '../../images/image-jeremy.png';
import data from '../../data/data.json';

const Main = () => {
    const[isActive, setIsActive] = useState({
        daily: true,
        weekly: false,
        monthly: false,
    });

    const userData = [...data];

    const initialData = () => {
        let initialData = [];
        userData.forEach(category => initialData.push(category.timeframes.daily));
        initialData.push('Yesterday');
        return initialData
    }

    const [displayData, setDisplayData] = useState(initialData);

    function loadDailyData(){
        let daily = [];
        userData.forEach(category => daily.push(category.timeframes.daily));
        daily.push('Yesterday'); 
        setIsActive({
            daily: true,
            weekly: false,
            monthly: false,
        });
        return setDisplayData([...daily]);
    }

    function loadWeeklyData(){
        let weekly = [];
        userData.forEach(category => weekly.push(category.timeframes["weekly"]));
        weekly.push('Last Week');
        setIsActive({
            daily: false,
            weekly: true,
            monthly: false,
        });
        return setDisplayData([...weekly]);
    }

    function loadMontlyData(){
        let monthly = [];
        userData.forEach(category => monthly.push(category.timeframes["monthly"]));  
        monthly.push('Last Month');
        setIsActive({
            daily: false,
            weekly: false,
            monthly: true,
        });
        return setDisplayData([...monthly]);
    }
  

    return (
        <IconContext.Provider value={{className: 'ellipsis'}}>
        <Cards.Wrapper>
            <Cards.ProfileCard>
                <Cards.ProfileData>
                    <Cards.ProfileImage src={profileImage} />
                    <div className="mobileDisplay">
                        <p className="reportfor">Report for</p>
                        <p className="name">Jeremy Robson</p>
                    </div>
                </Cards.ProfileData>
                <Cards.ProfileSchedule>
                    <Cards.ScheduleLink onClick={loadDailyData} isActive={isActive.daily}>Daily</Cards.ScheduleLink>
                    <Cards.ScheduleLink onClick={loadWeeklyData} isActive={isActive.weekly}>Weekly</Cards.ScheduleLink>
                    <Cards.ScheduleLink onClick={loadMontlyData} isActive={isActive.monthly}>Monthly</Cards.ScheduleLink>
                </Cards.ProfileSchedule>
            </Cards.ProfileCard>
            <Cards.CardWork>
                <Cards.InnerCard>
                    <div className="title"><span>{userData[0].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[0].current}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[0]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardWork>
            <Cards.CardPlay>
                <Cards.InnerCard>
                    <div className="title"><span>{userData[1].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[1]['current']}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[1]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardPlay>
            <Cards.CardStudy> 
                <Cards.InnerCard>
                    <div className="title"><span>{userData[2].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[2]['current']}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[2]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardStudy>
            <Cards.CardExercise>
                <Cards.InnerCard>
                    <div className="title"><span>{userData[3].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[3]['current']}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[3]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardExercise>
            <Cards.CardSocial>
                <Cards.InnerCard>
                    <div className="title"><span>{userData[4].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[4]['current']}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[4]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardSocial>
            <Cards.CardSelfCare>
                <Cards.InnerCard>
                    <div className="title"><span>{userData[5].title}</span><span><a href="http://"><IoEllipsisHorizontal size={20} /></a></span></div>
                    <div className="hoursDisplay"><p className="hours">{displayData[5]['current']}hrs</p>
                    <p className="schedule">{displayData[6]} - {displayData[5]['previous']}hrs</p></div>
                </Cards.InnerCard>
            </Cards.CardSelfCare>
        </Cards.Wrapper>
        </IconContext.Provider>
    )
}

export default Main;