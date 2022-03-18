import React from 'react';
import BaseCardSmall from '../components/base/BaseCardSmall';

function Discover() {
  return (
    <div>
      <div className="py-10 ">
        <section className="grid grid-cols-3 gap-x-8 gap-y-16 ">
          <BaseCardSmall />
          <BaseCardSmall />
          <BaseCardSmall />
          <BaseCardSmall />
        </section>
      </div>
    </div>
  );
}

export default Discover;
