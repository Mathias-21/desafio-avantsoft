import Header from '@/components/Header';
import React, { ReactNode } from 'react';

export default function LayoutPrivate({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
