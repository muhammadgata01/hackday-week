import React from 'react';

function ArticlesDetail() {
  return (
    <article className="flex flex-col gap-12 py-10">
      <div className="flex flex-col items-center">
        <span>React Native &bull; 19 Maret 2021</span>
        <h2 className="my-4 w-10/12 text-center lg:w-6/12">
          The More Important the Work, the More Important the Rest
        </h2>
        <div className="flex items-center gap-4">
          <img
            src={
              'https://ik.imagekit.io/3t4mp2a1w30/people-2_x7LdW9sH0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647621791626'
            }
            className="h-14 w-14"
            alt="Image Profile"
          />
          <div>
            <h6>Muhammad Gata</h6>
            <span>IP Probation</span>
          </div>
        </div>
      </div>
      <figure className="flex justify-center">
        <img
          src={
            'https://ik.imagekit.io/3t4mp2a1w30/image-detail_HhApMyhGg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647684236940'
          }
          className="h-auto w-full lg:w-10/12"
          alt="Image Detail"
        />
      </figure>
      <div className="flex flex-col items-center gap-6">
        <p className="w-10/12 lg:w-8/12">
          Male sixth sea it a. Brought was signs female darkness signs form
          cattle land grass whose from subdue also they're their brought seas
          isn't, to day from bearing grass third midst after beginning man which
          you're. Dry, gathering beginning given made them evening.
        </p>
        <p className="w-10/12 lg:w-8/12">
          Lights dry. Thing, likeness, forth shall replenish upon abundantly our
          green. Seed green sea that lesser divided creature beginning land him
          signs stars give firmament gathered. Wherein there their morning a he
          grass. Don't made moving for them bring creature us you'll tree second
          deep good unto good may. Us yielding.
        </p>
        <p className="w-10/12 lg:w-8/12">
          Have. Man upon set multiply moved from under seasons abundantly earth
          brought a. They're open moved years saw isn't morning darkness. Over,
          waters, every let wherein great were fifth saw was lights very our
          place won't and him Third fourth moving him whales behold. Beast
          second stars lights great was don't green give subdue his. Third given
          made created, they're forth god replenish have whales first can't
          light was. Herb you'll them beast kind divided. Were beginning fly air
          multiply god Yielding sea don't were forth.
        </p>
      </div>
    </article>
  );
}

export default ArticlesDetail;
