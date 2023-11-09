import PlaceImage from "./PlaceImage";
import "../Place.css";

export default function Place({ place }) {
    return (
        <div className="imgcontainer">
            <PlaceImage place={place} />
            <div>
                <strong>{place.name}</strong><br />
                {place.intro}
            </div>
        </div>
    );
}