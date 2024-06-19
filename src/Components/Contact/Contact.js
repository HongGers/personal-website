import style from './Contact.module.scss';
import { BsFacebook, BsInstagram, BsGithub, BsMedium, BsMailbox } from 'react-icons/bs';

function Contact(props) {
    const datas = [
        { logo: BsFacebook, links: 'https://www.facebook.com/jeng.tom.3/?locale=zh_TW', key: 'fb' },
        { logo: BsInstagram, links: 'https://www.instagram.com/jengtom/', key: 'ig' },
        { logo: BsGithub, links: 'https://github.com/HongGers', key: 'github' },
        { logo: BsMedium, links: 'https://medium.com/@hongdd881001', key: 'medium' },
        { logo: BsMailbox, links: 'mailto:hongdd881001@gmail.com', key: 'gmail' }
    ]
    
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.title}>Contact</div>

                <div className={style.logos}>
                    {datas.map(data => {
                        return (
                            <a key={data.key} href={data.links} target="_blank" rel="noopener noreferrer">
                                <data.logo className={style.icon} size='100%' />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contact;