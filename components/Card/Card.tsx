import * as React from "react";
import { ReactNode } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardUI,
} from "@/components/ui/card";
import Flag from "@/components/Flag";
import {cn} from "@/lib/utils";

export interface ICardProps extends React.ComponentProps<typeof CardUI> {
  title: string;
  footer?: ReactNode;
  classNameChildren?: string;
  image: string;
}

export function Card({
  className,
  title,
  footer,
  classNameChildren,
  image,
  children,
  ...props
}: ICardProps) {
  return (
    <CardUI className={cn('lg:w-1/5 m-3',className)} {...props}>
      <Flag image={image}/>
      {(title) && (
          <CardTitle className={'px-4 pt-6'}>{title}</CardTitle>
      )}
      <CardContent className={cn('',classNameChildren)}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardUI>
  );
}

export default Card;
