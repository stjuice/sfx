import React from 'react';

const Video = ({ src, className = '', ...props }: VideoProps) => {
  return (
    <video
      src={src}
      className={className}
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  );
};

type VideoProps = {
  src: string,
  className?: string,
  controls?: boolean,
  autoPlay?: boolean,
  loop?: boolean,
  muted?: boolean,
  poster?: string,
};

export default Video;
