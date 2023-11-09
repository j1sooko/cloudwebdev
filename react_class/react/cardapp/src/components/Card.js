const Card = (props) => {
    return (
        <div className="item">
            <h3>{props.name}</h3>
            <img src={props.src} alt={props.name} />
            <p>{props.intro}</p>
            <p className="more">
                <a href="#" className="button">More Info</a>
            </p>
        </div>
    )
}

export default Card;