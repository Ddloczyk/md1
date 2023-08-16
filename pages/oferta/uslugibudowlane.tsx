import Nav from '@/components/noweWersje/nav/Nav'
import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


const uslugibudowlane = () => {
  return (
    <div>
      <Nav/>
      <br></br><br></br><br></br>
      <p>Usługi budowlane</p>
      <ImageGallery items={images} />;
    </div>
  )
}

export default uslugibudowlane