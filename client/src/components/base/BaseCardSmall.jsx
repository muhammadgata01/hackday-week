import React from 'react';
import BaseCardContent from './BaseCardContent';

function BaseCardSmall() {
  return (
    <article className="w-full">
      <figure>
        <img
          src={'/images/image-1.png'}
          className="h-auto w-full"
          alt="Image Card"
        />
      </figure>

      <BaseCardContent />
    </article>
  );
}

export default BaseCardSmall;
