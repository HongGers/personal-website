import style from './Skills.module.scss';

import SkillContainer from '../SkillContainer/SkillContainer';
import { useState } from 'react';

export default function Skills(props) {
    //eslint-disable-next-line
    const [datas, setDatas] = useState([
        {
            title: 'Back End', datas: [
                { tab: 'Languages & Frameworks', content: ['Node.js + Express', 'Python + Flask'] },
                { tab: 'Skills', content: ['Rest API', 'Websocket'] },
                { tab: 'Tools', content: ['GCP'] }
            ]
        },
        {
            title: 'Front End', datas: [
                { tab: 'Languages & Frameworks', content: ['HTML/CSS/JavaScript', 'React.js', 'SASS/SCSS'] },
                { tab: 'Skills', content: ['RWD'] }
            ]
        },
        {
            title: 'Others', datas: [
                { tab: 'Database', content: ['Firebase', 'MySQL'] },
                { tab: 'Tools', content: ['Postman'] },
                { tab: 'Version Control', content: ['Git / GitHub'] },
            ]
        }
    ]);

    return (
        <div className={style.main}>
            <div className={style.title}>ᅳ  技能  ᅳ</div>

            <div className={style.content}>
                {datas.map((data, i) => <SkillContainer
                    key={data.title}
                    index={i}
                    title={data.title}
                    datas={data.datas}
                />)}
            </div>
        </div>
    )
}