import * as React from "react";

import Image from "next/image";
import {cn} from "@/lib/utils";

export interface IFlagProps {
  image: string;
  className?: string;
  size?: 'table' | 'card' | 'page';
}

export function Flag({ className, image, size = 'card', ...props }: IFlagProps) {
  return (
      <Image src={image} width={500} height={100} alt={'flag-images'} className={cn(
          'rounded-t-md object-cover w-full',
          {
              'h-[3rem] w-[6rem] rounded-md': size === 'table',
              'h-[10rem]': size === 'card',
              'h-[5rem]': size === 'page',
          },
          className
      )} />
  );
}

export default Flag;
