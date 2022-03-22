import React from 'react';
import CardContent from '../CardContent/CardContent';

const Card = ({ data, size }) => {
  return (
    <article className={size === 'large' ? 'grid gap-8 lg:grid-cols-3' : ''}>
      <figure className={size === 'large' ? 'lg:col-span-2' : ''}>
        <img
          src={`/images/${data.image}`}
          className={size === 'large' ? 'h-[26rem] w-full' : 'h-auto '}
          alt="Card"
        />
      </figure>
      <CardContent content={data} />
    </article>
  );
};

export default Card;
