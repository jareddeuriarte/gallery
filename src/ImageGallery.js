import React from 'react';
import ImageGallery from 'react-image-gallery';
import mom from './assets/mom-in-water.jpg';
import mae1 from './assets/mae-1.jpg';
import mae2 from './assets/mae-2.jpg';
import sunset from './assets/sunset.jpg';
import water from './assets/water.jpg';




const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}



export default MyGallery;



   {/* EXAMPLE
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail:`${PREFIX_URL}${i}t.jpg`
      }); */}