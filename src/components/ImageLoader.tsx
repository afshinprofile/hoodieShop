import { useEffect, useState } from "react";

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
        <img src={src} alt={alt} className={className} />
      ) : (
        <div className="placeholder">Loading...</div>
      )}
    </div>
  );
}

export default ImageLoader;
