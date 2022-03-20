import React from 'react';
import BaseCardContent from './BaseCardContent';

function BaseCardLarge({ data }) {
  return (
    <article className="grid gap-8 lg:grid-cols-3">
      <figure className="lg:col-span-2">
        <img
          src={`/images/${data.image}`}
          className="h-[26rem] w-full"
          alt="Image Card"
        />
      </figure>
      <BaseCardContent content={data} />
    </article>
  );
}

export default BaseCardLarge;
