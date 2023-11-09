const axios = require('axios');
const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

axios.get(url).then((result) => {
    if (result.status != 200) {
        throw new Error('요청에 실패했습니다.');
    }

    if (result.data) {
        return result.data;
    }

    throw new Error('데이터가 없습니다.');
}).then((data) => {
    if (!data.articleList || data.articleList.size == 0) {
        throw new Error('데이터가 없습니다.');
    }
    return data.articleList;
}).then((articles) => {
    return articles.map((article, idx) => {
        return { title: article.title, rank: idx + 1 };
    });
}).then((results) => {
    for (let movie of results) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}).catch((err) => {
    console.log('<<에러발생>>');
    console.log(err);
});