import React from 'react';
import style from './BlogContainer.module.scss';

export default function BlogContainer(props) {
    const getTitle = (str, length) => {
        let lengthCount = 0;
        let threshold = 0;
        for (var i = 0; i < str.length; i++) {
            //非中文
            if (str.charCodeAt(i) < 0x4E00 || str.charCodeAt(i) > 0x9FA5 || str[i] === '—') lengthCount += 0.5;
            //中文
            else lengthCount += 1;

            lengthCount <= length && threshold++;
        }

        return lengthCount > length + 1 ? str.substring(0, threshold) + '...' : str;
    }

    const getDescript = (str, length) => {
        return str.length > length ? str.substring(0, length - 1) + '...' : str;
    }

    return (
        <div className={style.container}>
            <div
                className={style.main}
                style={{ backgroundImage: `url(${props.img})` }}
                onClick={() => window.open(props.url)}
            >
                <div className={style.bg_mask}></div>
                <div className={style.title}>{getTitle(props.title, 13)}</div>
                <div className={style.pub_date}>{props.pub_date}</div>
                <div className={style.content}>{getDescript(props.descript, 70)}</div>
            </div>
        </div>
    )
} 