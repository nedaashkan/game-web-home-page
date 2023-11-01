// write a loop of images for heading
// and added to react app with a for loop display all the imeges in array
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="https://media.istockphoto.com/id/1390792827/photo/advanced-technology-on-cpu-processor.webp?b=1&s=170667a&w=0&k=20&c=LaVbBcdar4EyqHmEKqvmsR-NAj0nMdBJBAZQUKg3kV4=" />
        </div>
        <div className="embla__slide">
          <img src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtZWluZ3xlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        <div className="embla__slide">
          <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWVpbmd8ZW58MHx8MHx8fDA%3D" />
        </div>
      </div>
    </div>
  );
};
