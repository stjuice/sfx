import React from 'react';

const Image = ({ src, alt, className = '', ...props } : Image) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

type Image = {
  src: string,
  alt: string,
  className?: string,
};

export default Image;
