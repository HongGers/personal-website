import style from './Home.module.scss';
import JourneyList from '../../Components/JourneyList/JourneyList';
import PortfolioList from '../../Components/PortfolioList/PortfolioList';
import Skills from '../../Components/Skills/Skills';
import Contact from '../../Components/Contact/Contact';
import Blogs from '../../Components/Blogs/Blogs';

import tool_jpg from '../../Images/tool.jpg';

function Home() {
    return (
        <div className={style.page}>
            <div className={style.background}
                style={{ backgroundImage: `url(${tool_jpg})` }}></div>
            <div className={style.header}>Hello！<br /></div>
            <div className={style.content}>

                <div className={style.about}>
                    <div className={style.pro_pic}></div>
                    <div className={style.right}>
                        <label className={style.title}>關於我</label>
                        <div className={style.intro}>
                            嗨！我是鄭丞宏，一個喜歡寫程式、寫網頁，開發軟體解決問題的菜鳥工程師。<br /><br />
                            我是一個有兩年經驗的後端工程師，開發過公司數個案子的資料庫及API、Line聊天機器人，偶爾也會協助前端人員開發特定功能，
                            此外也有個人接案開發網頁應用程式的經驗。<br /><br />
                            在工作以外的時間喜歡自學一些有興趣的技能並開發一些side project，我很享受發現問題、系統設計、一直到實作出一個可以用的系統的感覺～ 寫side project不只可以讓我學到新的技能，
                            更多的是成就感和開心，感覺到是開發了一個有幫助的東西，而不是為了寫而寫！<br /><br />
                            除了寫網頁、設計系統外，我也對遊戲設計、3D建模之類的領域很有興趣，大學就讀相關科系也是希望可以進入遊戲相關產業或是可以自己寫遊戲～
                            喜歡玩各種電腦遊戲、手遊的時候去想遊戲機制、遊戲平衡、戰鬥系統之類的設計，也喜歡去思考為什麼這個遊戲會讓人覺得好玩、為什麼玩家願意花錢在這個遊戲上之類的問題<br /><br />
                            總之我是一個希望自己可以努力朝目標前進，成為厲害工程師的菜鳥！
                        </div>
                    </div>
                </div>

                <div className={style.journey}>
                    <JourneyList />
                </div>

                <div className={style.portfolio}>
                    <PortfolioList />
                </div>

                <div className={style.skills}>
                    <Skills />
                </div>

                <div className={style.blogs}>
                    <Blogs />
                </div>

                <div className={style.contact}>
                    <Contact />
                </div>                
            </div>
        </div>
    )
}

export default Home;