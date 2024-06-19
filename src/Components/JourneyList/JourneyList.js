import style from './JourneyList.module.scss';
import Bubble from '../JourneyBubble/JourneyBubble';

function JourneyList(props) {
    const journeys = [
        { title: '築睿科技－網頁工程師', duration: '2022.07 - 2024.06', descript: '新創小型公司的網頁工程師，主要使用GCP雲端服務開發公司產品的資料庫及API，語言使用JavaScript搭配Node.js，偶爾協助前端開發，工作中也常需要和UI/UX設計師討論系統細節及架構。' },
        { title: '個人接案－教室借用系統', duration: '2022.09 - 2023.02', descript: '大學系所委託開發的教室借用系統，前端使用純HTML+CSS撰寫，後端則使用Google的Firebase建置。經歷需求討論、設計系統流程及架構到實作，並於2023年03月起正式上線使用。' },
        { title: '個人接案－成大YJS系統後端', duration: '2024.01 - 2024.03', descript: '協助成大實驗室開發員工訓練系統後端資料庫及API。使用Python+Flask開發Restful API，設計並串接MySQL資料庫，並使用git/GitHub進行協作及版控' },
    ]
    return (
        <div className={style.main}>
            <div className={style.title}>ᅳ  經歷  ᅳ</div>
            {journeys.map(journey => <Bubble key={journey.title} title={journey.title} duration={journey.duration} descript={journey.descript} />)}
        </div>
    )
}

export default JourneyList;