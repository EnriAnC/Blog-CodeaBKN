'use client'

import { createContext, useContext, useState } from 'react';

interface ScrollContext{
  scrollY: number
  setScrollY: (scrollY: number)=>void;
}

const ScrollContext = createContext<ScrollContext>({ scrollY: 0, setScrollY: () => {} });


export const useScrollContext = () => useContext(ScrollContext);

interface Props{
  children: React.ReactNode
}

export const ScrollProvider = ({ children }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
