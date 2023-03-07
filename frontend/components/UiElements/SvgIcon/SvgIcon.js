import React from 'react';

const SvgIcon = ({ src, style }) => {
  return (
    <span
      style={style}
      className="svg-icon"
      dangerouslySetInnerHTML={{
        __html: src,
      }}
    ></span>
  );
};

export default SvgIcon;
