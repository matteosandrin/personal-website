import { Lightbox } from "@/components/Lightbox";
import { getImageSize } from "@/lib/image-size";

// A column of images. Click an image to open it in a lightbox.
export function Gallery({ images }: { images: string[] }) {
  return (
    <Lightbox>
      {images.map((url) => {
        const { width, height } = getImageSize(url);
        return (
          <a
            key={url}
            href={url}
            data-pswp-width={width}
            data-pswp-height={height}
            className="mt-double">
            <img
              src={url}
              width={width}
              height={height}
              className="mx-auto cursor-zoom-in object-contain md:max-h-[75vh]"
              alt=""
            />
          </a>
        );
      })}
    </Lightbox>
  );
}
