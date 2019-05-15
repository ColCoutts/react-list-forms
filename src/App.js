import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import hotDog1 from '../assets/basic_hotdog_1.jpg';
import hotDog2 from '../assets/Lentil_Dog_2.jpg';
import hotDog3 from '../assets/weird_dog_3.jpg';

export default function App() {
  const photos = [
    hotDog1,
    hotDog2,
    hotDog3
  ];

  return (
    <>
      <Header />
      <PhotoAlbum title='Hot-Dawwwwgs' photos={photos} />
      <Footer />
    </>
  );
}
