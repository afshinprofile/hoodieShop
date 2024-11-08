import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { blurhashToImageURL } from "../utils/blurhashToImage";

interface Props {
  src: string;
  hash: string;
  alt: string;
  className: string;
}

function ImageLoader({ src, alt, className, hash }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const placeholder_url = blurhashToImageURL({
    blurhash: hash,
    width: 200,
    height: 200,
  });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div>
      {isLoaded ? (
        <LazyLoadImage
          placeholderSrc={placeholder_url}
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
