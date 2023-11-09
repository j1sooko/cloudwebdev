import ColorContext from "../contexts/colors";

const MainContent = () => {
    return (
        <ColorContext.Consumer>
            { vlaue => (
                <div stype={{
                    color: vlaue.color,
                    border: '2px solid #c0ca33',
                    margin: 10
                }}>
                    <h2>MainContent</h2>
                </div>
            )}
        </ColorContext.Consumer>

    )
}

export default MainContent;