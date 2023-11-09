import '../assets/css/NavigationLink.css'

export default function NavigationLink() {
    return (
        <div>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#discover">Discover</a></li>
                <li><a href="#trips">Trips</a></li>
                <li><a href="#community">Comnnunity</a></li>
                <li><a href="#more">More</a></li>
            </ul>
        </div>
    )
}