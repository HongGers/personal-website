import style from './PortfolioList.module.scss';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

import tool_jpg from '../../Images/article.jpg';
import class_rental_cover from '../../Images/projects/class_rental/cover.png';

const LEFT_BADGE_COLOR = 'rgba(220,220,220,.8)';
const RIGHT_BADGE_COLOR = 'rgba(250, 188, 80,.8)';

function PortfolioList(props) {
    const [cards, setCards] = useState([
        {
            index: 2,
            title: '教室借用系統',
            left_badges: [{ content: '個人接案', color: LEFT_BADGE_COLOR }],
            right_badges: [
                { content: 'HTML/CSS/JavaScript', color: RIGHT_BADGE_COLOR },
                { content: 'Firebase', color: RIGHT_BADGE_COLOR },
                { content: 'RWD', color: RIGHT_BADGE_COLOR }
            ],
            img: class_rental_cover,
            content: '由大學系所委託開發的教室管理、借還系統，提供系上教師及同學查詢教室借用情況、提出借用申請，並提供管理人員後台管理介面，可查詢各教室借用紀錄並檢視是否已歸還、審核各教室借用申請等功能'
        }
    ]);

    const [isAnimating, setIsAnimating] = useState(false);

    const handleOnClick = (e) => {
        const setCardsIndex = (amount) => {
            setCards(cards.map(card => ({ ...card, index: card.index + amount })));
        }

        const value = e.target.value ?
            e.target.value : e.target.parentNode.value;

        if (Math.max(...cards.map(card => card.index)) === 2) {
            if (value === 'last') {
                setIsAnimating(true);
                setCardsIndex(1);
                setTimeout(() => setIsAnimating(false), 300);
            }
            else return;
        }
        else if (Math.min(...cards.map(card => card.index)) === 2) {
            if (value === 'next') {
                setIsAnimating(true);
                setCardsIndex(-1);
                setTimeout(() => setIsAnimating(false), 300);
            }
            else return;
        }
        else {
            setIsAnimating(true);
            setCardsIndex(value === 'last' ? 1 : -1);
            setTimeout(() => setIsAnimating(false), 300);
        }
    }

    return (
        <div className={style.main}>
            <div className={style.title}>ᅳ  Side Projects  ᅳ</div>
            <div className={style.cards}>
                {cards.map(card => <PortfolioCard key={card.title}
                    index={card.index}
                    title={card.title}
                    left_badges={card.left_badges}
                    right_badges={card.right_badges}
                    content={card.content}
                    img={card.img || tool_jpg}
                />)}

                <button onClick={e => handleOnClick(e)}
                    value='last'
                    disabled={isAnimating}
                    className={style.left_btn}><TfiAngleLeft values='last' /></button>

                <button onClick={e => handleOnClick(e)}
                    value='next'
                    disabled={isAnimating}
                    className={style.right_btn}><TfiAngleRight value='next' /></button>

                <div className={style.index_display}>{cards.findIndex(el => el.index === 2) + 1}/{cards.length}</div>
            </div>
        </div>
    )
}

export default PortfolioList;