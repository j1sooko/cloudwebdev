import { useContext } from "react";
import { ImageSizeContext } from '../context/ImageSizeContext';
import { getImageUrl } from '../utils/getImageUrl';

export default function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}