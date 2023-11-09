// import UserContext from "../context/UserContext"
import { UserContext } from "../App"; 

export default function MyComponent () {
    return (
        <UserContext.Consumer>
            {
                (value) => <div>{value}</div>
            }
        </UserContext.Consumer>
    )
}
