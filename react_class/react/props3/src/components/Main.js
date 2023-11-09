function Main({children}) {
    const mainstyle = {
        border: '2px solid green',
        marginBottom: 10
    }
    return (
        <>
            <div style={mainstyle}> Main
                <div>{children}</div>
            </div>
        </>
    )
}


export default Main;