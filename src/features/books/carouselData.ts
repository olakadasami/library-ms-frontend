import image1 from "../../assets/book-carousel/1.png";
import image2 from "../../assets/book-carousel/2.png";
import image3 from "../../assets/book-carousel/3.png";
import image4 from "../../assets/book-carousel/4.png";
import image5 from "../../assets/book-carousel/5.png";
import image6 from "../../assets/book-carousel/6.png";
import { StaticImageData } from "next/image";

export interface IBookCarousel {
  cover: StaticImageData;
  title: string;
  author: string;
}

export const bookCarouselData: IBookCarousel[] = [
  {
    cover: image1,
    title: "The Critique of Pure Reason",
    author: "Immonuel Kont",
  },
  {
    cover: image2,
    title: "Stroller",
    author: "Amondo Porrish Morgon",
  },
  {
    cover: image3,
    title: "The Critique of Pure Reason",
    author: "Don Norman",
  },
  {
    cover: image4,
    title: "Lean UX",
    author: "Jeff Gothelf",
  },
  {
    cover: image5,
    title: "The Republic",
    author: "Plato",
  },
  {
    cover: image6,
    title: "The Critique of Pure Reason",
    author: "Moud Newton",
  },
];
