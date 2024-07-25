import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

type TBlurImageProps = {
  src: string;
  blurHash: string;
  className: string;
  blureClassName?: string;
  radius?: string;
};

export default function BlurImage({
  src,
  blurHash,
  className,
  blureClassName,
  radius,
}: TBlurImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);

    img.src = src;

    if (img.complete) {
      setImageLoaded(true);
    }
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <div
          className={blureClassName ? blureClassName : className}
          style={{
            clipPath: `inset(0 0 0 0 round ${radius})`,
          }}
        >
          <Blurhash
            hash={blurHash}
            width={'100%'}
            height={'100%'}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        className={className}
        style={{ display: imageLoaded ? 'inline' : 'none' }}
        src={src}
        alt=''
      />
    </>
  );
}
