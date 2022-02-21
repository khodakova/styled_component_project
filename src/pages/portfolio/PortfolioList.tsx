import React from 'react';
import img1 from '../../assets/portfolio/1.jpeg';
import img2 from '../../assets/portfolio/2.jpeg';
import img3 from '../../assets/portfolio/3.jpeg';
import img4 from '../../assets/portfolio/4.jpeg';
import Slider from "../../components/slider/Slider";

const content = [
    {
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img1
    },
    {
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img2
    },
    {
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img3
    },
    {
        text: 'atata sal;fkj aslkjfdalsdkjf asldkfjasldf',
        name: 'alsfdkj',
        src: img4
    }
];

const PortfolioList = () => {
    return (
        <div>
            <Slider content={content}/>
        </div>
    );
};

export default PortfolioList;
