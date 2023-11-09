function Main(props) {
    const mainstyle = {
        border: '2px solid green',
        marginBottom: 10
    }
    return (
        <>
            <div style={mainstyle}>
                <h1>Movies</h1>
                <div>
                    <div>{props.title}</div>
                    <div>{props.genre}</div>
                    <div>{props.release_date}</div>
                    <div>{props.rating}</div>
                    <div>{props.movie_length}</div>
                </div>
            </div>
        </>
    )
}


export default Main;