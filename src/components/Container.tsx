import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className='max-w-7xl xl:mx-auto mx-4 xl:px-5'>{children}</div>;
}
