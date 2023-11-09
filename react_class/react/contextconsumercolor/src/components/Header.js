import ColorContext from "../contexts/colors";


function Header() {
    return (
        <ColorContext.Consumer>
            { value => (
                <div style={{color: value.color}}>
                    <h2>헤더</h2>
                </div>
            )

            }
        </ColorContext.Consumer>
    )
}

export default Header;