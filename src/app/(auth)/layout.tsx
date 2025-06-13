'use client';

import { Card } from '@/components/ui/card';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="p-5 w-[480px]">{children}</Card>
    </section>
  );
}
