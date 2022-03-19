import React from 'react';
import BaseCardContent from './BaseCardContent';

function BaseCardLarge() {
  return (
    <article className="grid gap-8 lg:grid-cols-3">
      <figure className="lg:col-span-2">
        <img
          src={
            'https://ik.imagekit.io/3t4mp2a1w30/image-hero_gpGvKheiy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647682748474'
          }
          className="h-auto w-full"
          alt="Image Card"
        />
      </figure>
      <BaseCardContent />
    </article>
  );
}

export default BaseCardLarge;
