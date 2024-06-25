"use client"
import React from 'react';
import Image from 'next/image';
import { keyframes } from '@emotion/react';

const moveLeft = keyframes`
  from {
    transform: translateX(100%); /* Start from the right */
  }
  to {
    transform: translateX(0); /* Move to the left */
  }
`;

import yourSvg from '../../public/MovingImage.png'; // Replace with your path

const MovingImage = (props) => {
  return (
    <>
    <Image
        alt="Moving Image"
        src="/MovingImage.png"
        // height={40}
        // width={1100}
        layout='fill'
    />
    </>
  );
};

export default MovingImage;
