import React from 'react';
import CardContent from '../CardContent/CardContent';

const Card = ({ data, isLarge }) => {
  return (
    <article className={isLarge ? 'grid gap-8 lg:grid-cols-3' : ''}>
      <figure className={isLarge ? 'lg:col-span-2' : ''}>
        <img
          src={`/images/${data.image}`}
          className={isLarge ? 'h-[26rem] w-full' : 'h-auto '}
          alt="Card"
        />
      </figure>
      <CardContent content={data} />
    </article>
  );
};

export default Card;
