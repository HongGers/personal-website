import { useEffect, useState } from 'react';
import style from './PortfolioCard.module.scss';
import computer_img from '../../Images/computer.jpg';

function PortfolioCard(props) {
    const [index, setIndex] = useState(props.index);
    const [prevIndex, setPrevIndex] = useState(null);
    const [className, setClassName] = useState(null);

    useEffect(() => setIndex(props.index), [props.index]);
    useEffect(() => setPrevIndex(index), [index]);

    useEffect(() => {
        setClassNameByIndex(index, prevIndex);
        //eslint-disable-next-line
    }, [index]);

    const setClassNameByIndex = (index, prevIndex) => {
        if (prevIndex === null) {
            if (index <= 0 || index > 3) setClassName(style.hide)
            else setClassName(`${style[`pos_${index}`]} ${style.card}`);
        }
        else {
            if (index === 0 && prevIndex === 1) {
                setClassName(`${style.fade_out_left} ${style.card}`);
                setTimeout(() => setClassName(style.hide), 300);
            }
            else if (index === 4 && prevIndex === 3) {
                setClassName(`${style.fade_out_right} ${style.card}`);
                setTimeout(() => setClassName(style.hide), 300);
            }
            else if (index === 1 && prevIndex === 0) {
                setClassName(`${style.fade_in_left} ${style.card}`);
                setTimeout(() => setClassName(`${style.pos_1} ${style.card}`), 300);
            }
            else if (index === 3 && prevIndex === 4) {
                setClassName(`${style.fade_in_right} ${style.card}`);
                setTimeout(() => setClassName(`${style.pos_3} ${style.card}`), 300);
            }
            else if (index > 0 && index < 4) setClassName(`${style[`pos_${index}`]} ${style.card}`);
            else setClassName(style.hide);
        }
    }

    const handleMouseEnter = e => {
        let target;
        if ([
            'PortfolioCard_title_',
            'PortfolioCard_content_',
            'PortfolioCard_side_',
            'PortfolioCard_badge_area_'].some(obj => e.target.className.startsWith(obj)))
            target = e.target.parentNode.parentNode;
        else if ([
            'PortfolioCard_badge_'
        ].some(obj => e.target.className.startsWith(obj))) target = e.target.parentNode.parentNode.parentNode
        else target = e.target.parentNode;

        if (props.index === 2)
            target.style.transform = `rotateZ(-3deg) scale(1.03)`;
    }

    const handleMouseLeave = e => {
        let target;
        if ([
            'PortfolioCard_title_',
            'PortfolioCard_content_',
            'PortfolioCard_side_',
            'PortfolioCard_badge_area_'].some(obj => e.target.className.startsWith(obj)))
            target = e.target.parentNode.parentNode;
        else if ([
            'PortfolioCard_badge_'
        ].some(obj => e.target.className.startsWith(obj))) target = e.target.parentNode.parentNode.parentNode
        else target = e.target.parentNode;

        if (props.index === 2)
            target.style.transform = '';
    }

    return (
        <div className={className}
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseLeave(e)}>
            <div className={style.left}
                style={{ backgroundImage: `url(${props.img})` }}>
                <div className={style.side}></div>
                <div className={style.badge_area}>
                    {props.left_badges.map((badge, i) =>
                        <div key={badge + i} className={style.badge} style={{ backgroundColor: badge.color }}>{badge.content}</div>
                    )}
                </div>
            </div>
            <div className={style.right} style={{ backgroundImage: `url(${computer_img})` }}>
                <div className={style.bg_mask}></div>
                <div className={style.title}>{props.title}</div>
                <div className={style.rwd_sap}></div>
                <div className={style.content}>{props.content}</div>
                <div className={style.badge_area}>
                    {props.right_badges.map((badge, i) =>
                        <div key={badge + i} className={style.badge} style={{ backgroundColor: badge.color }}>{badge.content}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;