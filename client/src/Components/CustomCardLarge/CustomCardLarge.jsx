import React from 'react';
import CustomCardContent from '../CustomCardContent/CustomCardContent';

function CustomCardLarge({ data }) {
  return (
    <article className="grid gap-8 lg:grid-cols-3">
      <figure className="lg:col-span-2">
        <img
          src={`/images/${data.image}`}
          className="h-[26rem] w-full"
          alt="Image Card"
        />
      </figure>
      <CustomCardContent content={data} />
    </article>
  );
}

export default CustomCardLarge;
