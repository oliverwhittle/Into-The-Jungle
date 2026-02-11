import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import styles from "../styles/gallery.module.css";

const photos = [
  { src: "../images/4.jpeg", width: 800, height: 1200 },
  { src: "../images/1.jpeg", width: 800, height: 800 },
  { src: "../images/2.jpeg", width: 800, height: 1200 },
  { src: "../images/5.jpeg", width: 1200, height: 800 },
  { src: "../images/3.jpeg", width: 800, height: 1200 },
  { src: "../images/7.jpeg", width: 800, height: 1200 },
  { src: "../images/8.jpeg", width: 800, height: 1200 },
  { src: "../images/9.jpeg", width: 1200, height: 800 },
  { src: "../images/10.jpeg", width: 800, height: 1200 },
  { src: "../images/6.jpeg", width: 1200, height: 800 },
  { src: "../images/11.jpeg", width: 800, height: 800 },
  { src: "../images/12.jpeg", width: 800, height: 800 },
  { src: "../images/13.jpeg", width: 800, height: 800 },
];

function Gallery() {
  return (
    <section id="gallery" className={styles.container}>
      <h1 className={styles.title}>2025 Gallery</h1>
      <MasonryPhotoAlbum photos={photos} columns={4} spacing={10} />
    </section>
  )
}

export default Gallery;