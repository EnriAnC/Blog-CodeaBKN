import { HTMLAttributes } from 'react';

interface HeadingAttributes extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  viewTransitionName?: string | number | any;
}
