function Movie() {
    const h1style = {
        border: '1px solid teal',
        backgroundColor: 'teal',
        color: 'white',
        marginBottom: 10,
        padding: 10
    }

    const divStyle = {
        border: '2px solid teal',
        margin: 10,
        padding: 10
    }

    const movies = [
        {
            movie_id: 1,
            title: '오펜하이머',
            genre: '스릴러/드라마',
            release_date: '2023.08.15',
            rating:'7.3',
            movie_length: '180분'
        },
        {
            movie_id: 2,
            title: '콘크리트 유토피아',
            genre: '드라마',
            release_date: '2023.08.09',
            rating:'6.9',
            movie_length: '129분'
        },
        {
            movie_id: 3,
            title: '극한직업',
            genre: '코미디',
            release_date: '2019.01.23',
            rating:'7.4',
            movie_length: '111분'
        }
    ]

    return (
        <>
            <h1 style={h1style}>Movies</h1>
            {
                movies.map((movie, idx) => {
                    return (
                        <div key={idx} style={divStyle}>
                            <div>제목: {movie.title}</div>
                            <div>장르: {movie.genre}</div>
                            <div>개봉: {movie.release_date}</div>
                            <div>평점: {movie.rating}</div>
                            <div>러닝타임: {movie.movie_length}</div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Movie;