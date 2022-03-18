import React from 'react';
import BaseCardSmall from '../components/base/BaseCardSmall';

function Discover() {
  return (
    <main className="py-10 ">
      <section className="grid grid-cols-3 gap-x-8 gap-y-16 ">
        <BaseCardSmall />
        <BaseCardSmall />
        <BaseCardSmall />
        <BaseCardSmall />
        <BaseCardSmall />
        <BaseCardSmall />
      </section>
    </main>
  );
}

export default Discover;
