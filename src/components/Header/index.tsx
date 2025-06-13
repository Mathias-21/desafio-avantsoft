'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { logout } from '@/services/auth';

export default function Header() {
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);

  const handleModal = () => {
    setLogoutModalIsOpen(!logoutModalIsOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-black italic">AvantSoft</h1>
      <Dialog open={logoutModalIsOpen} onOpenChange={setLogoutModalIsOpen}>
        <DialogTrigger>
          <Button onClick={handleModal}>
            Sair <LogOut />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Deseja realmente sair?</DialogTitle>
          </DialogHeader>
          <div className="flex gap-5 justify-end pt-10">
            <Button onClick={() => handleModal()}>Não, cancelar</Button>
            <Button variant="destructive" onClick={logout}>
              Sim, sair
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
