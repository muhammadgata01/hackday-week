import React from 'react';
import BaseCardLarge from '../components/base/BaseCardLarge';
import BaseCardSmall from '../components/base/BaseCardSmall';

function Discover() {
  return (
    <main>
      <div className="py-4">
        <BaseCardLarge />
      </div>
      <section className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
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
