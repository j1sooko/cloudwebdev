import { Link, Outlet, useParams } from "react-router-dom";
import '../User.css'

const User = () => {
    const {User_id} = useParams() // "/user/3/account"와 같은 라우팅을 하기 위한 hook. 현재 라우팅 URL에서 자녀라우팅으로 매개변수 전달 가능
    return (
        <>
            <h1>사용자 아이디: {User_id}</h1>
            <ul>
                <li><Link to="profile">프로필(Profile)</Link></li>
                <li><Link to="account">계정(Account)</Link></li>
                <li><Link to="/users">사용자(Users) 페이지로 이동</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default User;