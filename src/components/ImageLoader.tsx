import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  src: string;
  alt: string;
  className: string;
}

function ImageLoader({ src, alt, className }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div>
      {isLoaded ? (
        <LazyLoadImage
          placeholderSrc=""
          effect="blur"
          src={src}
          alt={alt}
          className={className}
        />
      ) : (
        <div className="placeholder">درحال بارگزاری . . .</div>
      )}
    </div>
  );
}

export default ImageLoader;
