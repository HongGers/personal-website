import style from './JourneyBubble.module.scss';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';
import { useState, useRef, useEffect } from 'react';
import useIntersection from '../../Helper/useIntersection';

function JourneyBubble(props) {
    const [showDescript, setShowDescript] = useState(false);
    const [mainClassName, setMainClassName] = useState(style.main);

    const mainElement = useRef();
    const inViewport = useIntersection(mainElement, '0px');

    useEffect(() => {
        if (inViewport) {
            setMainClassName(name => {
                return /fade_in/.test(name) ? name : `${name} ${style.fade_in}`
            });
        }
    }, [inViewport]);

    return (
        <div className={mainClassName} ref={mainElement}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.outer_circle}>
                        <div className={style.inner_circle}></div>
                    </div>
                </div>

                <div className={style.mid}>
                    <div className={style.separator}></div>
                    <div className={style.duration}>{props.duration}</div>
                    <div className={style.title}>{props.title}</div>
                </div>

                <div className={style.right} onClick={() => setShowDescript(!showDescript)}>
                    {showDescript ?
                        <TfiAngleUp className={style.arr} ></TfiAngleUp> :
                        <TfiAngleDown className={style.arr} ></TfiAngleDown>}
                    <div className={style.descript}>{props.descript}</div>
                </div>
            </div>

            <div className={style.rwd_descript}
                style={{ maxHeight: showDescript ? '200px' : '0' }}>{props.descript}</div>
        </div>
    )
}

export default JourneyBubble;