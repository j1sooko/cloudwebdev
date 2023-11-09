const axios = require('axios');

async function getTop20Moives() {
    const url = 'http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';
    const result = await axios.get(url);
    // console.log(result.data);
    if (result.status != 200) {
        throw new Error('요청에 실패했습니다.');
    }

    const data = result.data;
    if (!data.articleList || data.articleList.size == 0) {
        throw new Error('데이터가 없습니다.');
    }

    const movieInfos = data.articleList.map((article, idx) => {
        return { title: article.title, rank: idx + 1 };
    });

    for (let movie of movieInfos) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}

getTop20Moives();