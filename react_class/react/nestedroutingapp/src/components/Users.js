import { Link, Outlet } from "react-router-dom";
import '../User.css'

const Users = ({users}) => {
    return (
        <>
            <h1>사용자(Users)</h1>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <Link to={user.id}>{user.user_name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet />
        </>
    )
}

export default Users;