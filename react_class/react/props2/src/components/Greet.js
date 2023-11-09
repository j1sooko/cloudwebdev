import Headline from "./Headline";
import Description from "./Description";
import Message from "./Message";

function Greet({title, description}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Headline title = {`${title} 세계에 오신 것을 환영합니다.`} />
            <Description param = {description} />
            <hr />
            <Message title="Vue.js" description={description} />
        </div>

    )
}

export default Greet;