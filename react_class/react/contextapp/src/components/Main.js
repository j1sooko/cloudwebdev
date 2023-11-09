import { UserContext } from "../App";
import MyComponent from "./MyComponent";

export default function Main() {
    return ( // 값을 변경하기 위해 Provider 사용
        <div>
            <UserContext.Provider value={'BTS'}> 
                <MyComponent />
            </UserContext.Provider>
        </div>
    )
}