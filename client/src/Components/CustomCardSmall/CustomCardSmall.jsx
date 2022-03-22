import React from 'react';
import CustomCardContent from '../CustomCardContent/CustomCardContent';

const CustomCardSmall = ({ data }) => {
  return (
    <article className="w-full">
      <figure>
        <img
          src={`/images/${data.image}`}
          className="h-auto w-full"
          alt="Image Card"
        />
      </figure>

      <CustomCardContent content={data} />
    </article>
  );
};

export default CustomCardSmall;
