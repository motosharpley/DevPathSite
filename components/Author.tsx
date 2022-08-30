import React from 'react';
import Image from 'next/image';

import { CMSImageLoader } from '../util';

const Author = (props: {
  author: { name: string; bio: string; photo: { url: string } };
}) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={CMSImageLoader}
        alt={props.author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={props.author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">
      {props.author.name}
    </h3>
    <p className="text-white text-ls">{props.author.bio}</p>
  </div>
);

export default Author;
