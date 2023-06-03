import Link from 'next/link';
import React, { AnchorHTMLAttributes, FC } from 'react';

//-- Each group of menu items
export type MenuGroup = {
  id        : number,
  type      : "list" | "collapse" | "pop-out",
  items     : MenuItem[]
};
//-- Each menu item
export type MenuItem = {
  id        : string;
  title     : string;
  href      : string;
  alt       : AnchorHTMLAttributes<HTMLAnchorElement>;
  parentId  ?: string; //TODO: add parent id to this.
};
  

// Component for individual menu items
const MenuItemComponent: FC<MenuItem> = ({ id, title, href, alt, parentId }) => (
  <Link href={href} key={id}>
    {title}
  </Link>
);

// Components for different types of menu groups
const ListGroup: FC<{ group: MenuGroup }> = ({ group: { id, items } }) => (
  <div key={id}>
    {items.map((item) => (
      <MenuItemComponent {...item} key={item.id} />
    ))}
  </div>
);

const CollapseGroup: FC<{ group: MenuGroup }> = ({ group: { id, items } }) => (
  <details key={id}>
    <summary>{id}</summary>
    {items.map((item) => (
      <MenuItemComponent {...item} key={item.id}/>
    ))}
  </details>
);

const PopOutGroup: FC<{ group: MenuGroup }> = ({ group: { id, items } }) => (
  <div key={id}>
    {items.map((item) => (
      <MenuItemComponent {...item} key={item.id} />
    ))}
  </div>
);

type ChoiceMenuProps = {
  menus: MenuGroup[]
}

export const ChoiceMenu: FC<ChoiceMenuProps> = ({ menus }) => (
  <nav>
    {menus.map((group) => {
      switch (group.type) {
        case 'list':
          return <ListGroup group={group} />;
        case 'collapse':
          return <CollapseGroup group={group} />;
        case 'pop-out':
          return <PopOutGroup group={group} />;
        default:
          return null;
      }
    })}
  </nav>
);

export default ChoiceMenu;
