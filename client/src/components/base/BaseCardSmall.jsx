import React from 'react';
import BaseCardContent from './BaseCardContent';

function BaseCardSmall() {
  return (
    <article className="w-full">
      <figure>
        <img
          src={
            'https://ik.imagekit.io/3t4mp2a1w30/image-3_FfIkQPpHL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647621791433'
          }
          className="h-auto w-full"
          alt="Image Card"
        />
      </figure>

      <BaseCardContent />
    </article>
  );
}

export default BaseCardSmall;
