import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const navStyle = {
        width:'95%',
        height:30,
        margin:"0 auto",
        backgroundColor:"teal"
    }

    const ulStyle = {
        lifeStyleType: "none",
        margin: "0 auto",
        padding: 0,
        overflow: "hidden"
    }

    const liStyle = { float:"left" }

    // Link는 URL을 설정하고 검색 기록을 추적하는 데 사용, Outlet은 현재 선택된 경로를 랜더링
    return (
        <>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <Link to="/" style={{ display:"block", color:"white",
                    textAlign: "center", textDecoration: "none" }}>
                        Home
                        </Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="/About" style={{ display:"block", color:"white",
                    textAlign: "center", textDecoration: "none" }}>
                        About
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;