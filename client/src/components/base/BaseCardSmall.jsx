import React from 'react';
import BaseCardContent from './BaseCardContent';

function BaseCardSmall({ data }) {
  return (
    <article className="w-full">
      <figure>
        <img
          src={`/images/${data.image}`}
          className="h-auto w-full"
          alt="Image Card"
        />
      </figure>

      <BaseCardContent content={data} />
    </article>
  );
}

export default BaseCardSmall;
