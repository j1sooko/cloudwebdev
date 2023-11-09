import { places } from '../data/imagedata';
import Place from './Place';

export default function ImageList() {
    const listItems = places.map(place => 
      <li key={place.id}>
        <Place place={place} />
      </li>      
    );
    return <ul>{listItems}</ul>
}