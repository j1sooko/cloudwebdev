import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import styled from "styled-components"
import axios from "axios"

const NewsListBlock = styled.div`
    box-sizing: border-block;
    padding-bottm: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media sreen and (max-width: 768px) {
        width:100%;
        padding-left: 1rem;
        pdding-right: 1rem;
    } 
`

const sampleArticle = {
    title:'제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/320'
}

export default function NewsList() {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const getData = async () => {
            setLoading(true);
            try {
                let url='https://newsapi.org/v2/top-headlines?country=kr&apiKey=3029208a79894850854dd325679b261b'
                const response = await axios.get(url);
                setArticles(response.data.articles);
            } catch(e) {
                console.log('에러 :', e)
            }
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) {
        return <NewsListBlock>로딩 중...</NewsListBlock>
    }

    if (!articles) return null; // 아직 데이터가 없는 경우

    return (
        <NewsListBlock>
            {
                articles.map(article => {
                    return <NewsItem key={article.url} article={article} />
                })
            }
            {/* <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} /> */}
        </NewsListBlock>
    )
}