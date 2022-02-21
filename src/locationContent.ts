import img1 from './assets/cats/1.jpg';
import img2 from './assets/cats/2.jpg';
import img3 from './assets/cats/3.jpg';
import img4 from './assets/cats/4.jpg';
import img5 from './assets/cats/5.jpg';
import img6 from './assets/cats/6.jpg';
import img7 from './assets/cats/7.jpg';

interface IImage {
    src: string,
    alt: string
}
export const locationContent: IImage[] = [
    { src: img1, alt: 'cat1' },
    { src: img2, alt: 'cat2' },
    { src: img3, alt: 'cat3' },
    { src: img4, alt: 'cat4' },
    { src: img5, alt: 'cat5' },
    { src: img6, alt: 'cat6' },
    { src: img7, alt: 'cat7' },
];
