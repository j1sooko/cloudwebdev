import Card from "./Card";
import '../assets/css/Main.css';
// import America from '../assets/imgs/america.png';
// import Austria from '../assets/imgs/austria.png';
// import Canada from '../assets/imgs/canada.png';
// import Czech from '../assets/imgs/czech.png';
// import Germany from '../assets/imgs/germany.jpg';
// import Hungary from '../assets/imgs/hungary.png';
// import Italy from '../assets/imgs/italy.png';
// import Swiss from '../assets/imgs/swiss.png';
// import Denmark from '../assets/imgs/denmark.png';

const Main = () => {
    const introStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet massa nec nunc congue placerat. Nam gravida porttitor diam, eu convallis tortor pharetra id. Mauris venenatis venenatis dui, sit amet euismod enim iaculis sit amet. Ut maximus elit massa, eu iaculis justo ultricies dignissim. Nunc eros lorem, placerat non nisl imperdiet, cursus dignissim eros. Sed metus metus, mattis non tortor nec, ultrices vulputate ipsum. Ut in magna nec neque rutrum fermentum.";
    const images = [
        {name:"America", src:"https://reactcyst.blob.core.windows.net/reactimgs/america.png",
        intro:introStr},
        {name:"Austria", src:"https://reactcyst.blob.core.windows.net/reactimgs/austria.png",
        intro:introStr}, 
        {name:"Canada", src:"https://reactcyst.blob.core.windows.net/reactimgs/canada.png",
        intro:introStr}, 
        {name:"Czech", src:"https://reactcyst.blob.core.windows.net/reactimgs/czech.png",
        intro:introStr}, 
        {name:"Germany", src:"https://reactcyst.blob.core.windows.net/reactimgs/germany.jpg",
        intro:introStr}, 
        {name:"Hungary", src:"https://reactcyst.blob.core.windows.net/reactimgs/hungary.png",
        intro:introStr}, 
        {name:"Italy", src:"https://reactcyst.blob.core.windows.net/reactimgs/italy.png",
        intro:introStr}, 
        {name:"Swiss", src:"https://reactcyst.blob.core.windows.net/reactimgs/swiss.png",
        intro:introStr},  
        {name:"Denmark", src:"https://reactcyst.blob.core.windows.net/reactimgs/denmark.png",
        intro:introStr}
    ];


    return (
        <div className="main">
            <h2>Attractions</h2>
            <div className="attractions section">
                {
                    images.map((image, index) => {
                        return <Card key={index} name={image.name} src={image.src} intro={image.intro} />
                    })
                }
            </div>
        </div>
    )
};

export default Main;