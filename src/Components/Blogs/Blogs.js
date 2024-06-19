import style from './Blogs.module.scss';

import BlogContainer from './BlogContainer/BlogContainer';
import { useEffect, useState } from 'react';

export default function Blogs(props) {
    const [blogs, setBlogs] = useState(null);
    const maxPostsCount = 5;

    const getDescript = (str) => {
        const startIndex = str.indexOf('<p>') + 3;
        const endIndex = str.indexOf('</p>');

        return str.substring(startIndex, endIndex);
    }

    const getPubDate = (str) => {
        const dateStr = str.split(' ')[0];
        return dateStr.replaceAll('-', '/');
    }

    useEffect(() => {
        const fetchMediumData = async () => {
            const resp = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hongdd881001', { method: 'GET' });
            if (resp.ok) {
                const data = await resp.json();
                //由日期最新到最舊排序
                data.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

                setBlogs(data.items.filter((obj, i) => i < maxPostsCount));
            }
        }

        fetchMediumData();
    }, []);

    return (
        <div className={style.main}>
            <div className={style.title}>ᅳ  文章  ᅳ</div>

            <div className={style.blog_area}>
                {blogs && blogs.map(blog => {
                    return <BlogContainer
                        key={blog.title}
                        img={blog.thumbnail}
                        url={blog.link}
                        title={blog.title}
                        pub_date={getPubDate(blog.pubDate)}
                        descript={getDescript(blog.description)}
                    />
                })}
            </div>

        </div>
    )
}