import { decode } from "blurhash";

interface Props {
  blurhash: string;
  width: number;
  height: number;
}

export function blurhashToImageURL({ blurhash, width, height }: Props): string {
  const pixels = decode(blurhash, width, height);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not create canvas context");

  canvas.width = width;
  canvas.height = height;

  const imageData = new ImageData(pixels, width, height);
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}
