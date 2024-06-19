import style from './SkillContainer.module.scss';

export default function SkillContainer(props) {

    return (
        <div className={style.main}>
            <div
                className={style.header}
            >{props.title}</div>

            <div className={style.body}>
                {props.datas.map(data => {
                    return (
                        <div className={style.container} key={data.tab}>
                            <div className={style.tab}>{data.tab}</div>
                            {data.content.map(obj => <div
                                className={style.content}
                                key={obj}
                            >• {obj}</div>)}
                        </div>)
                })}
            </div>
        </div >
    )
}