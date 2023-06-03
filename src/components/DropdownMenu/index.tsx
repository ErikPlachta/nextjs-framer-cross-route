'use client'
import React, { useState, FC } from 'react';
import { ChoiceMenu, MenuGroup } from '@/components/Menu'; // Import the ChoiceMenu component from its file location

type DropdownMenuProps = {
  label: string;
  menus: MenuGroup[];
};

export const DropdownMenu: FC<DropdownMenuProps> = ({ label, menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{label}</button>
      {isOpen && <ChoiceMenu menus={menus} />}
    </div>
  );
};
