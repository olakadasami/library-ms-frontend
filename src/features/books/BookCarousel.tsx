import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { bookCarouselData } from "./carouselData";
import Image from "next/image";

export default function BookCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {bookCarouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 bg-transparent"
          >
            <div className="p-1">
              <Card className="shadow-none border-none">
                <CardDescription className="">
                  <Image src={item.cover} alt={item.title} />
                </CardDescription>
                <CardTitle className="text-xs">{item.title}</CardTitle>
                <CardDescription className="text-xs">
                  {item.author}
                </CardDescription>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
