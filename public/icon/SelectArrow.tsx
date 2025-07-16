import * as React from 'react';
import { SVGProps } from 'react';
const SvgSelectArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 8 5' {...props}>
    <path
      fill='#105FAE'
      fillRule='evenodd'
      d='M.46.594a.48.48 0 0 1 .68 0L4 3.454 6.86.595a.48.48 0 0 1 .68.679l-3.2 3.2a.48.48 0 0 1-.68 0l-3.2-3.2a.48.48 0 0 1 0-.679'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSelectArrow;
