import { useState } from 'react';
import './AppDrawer.css';
import { FaBars } from 'react-icons/fa6';
type Item = {
  id: number;
  title: string;
};
type AppDrawerProps = {
  items: Item[];
};

export function AppDrawer({ items }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="image">
        <FaBars onClick={handleMenuClick} className="menu-icon" />
        <div className={isOpen ? 'menu-drawer' : 'menu-drawer is-open'}>
          <h2 className="menu-heading">Menu</h2>
          {items.map((items) => (
            <MenuItems items={items} />
          ))}
        </div>
        <div
          onClick={handleMenuClick}
          className={isOpen ? 'menu-shade' : 'menu-shade is-drawn'}></div>
      </div>
    </>
  );
}

type MenuItemsProps = {
  items: Item;
};

function MenuItems({ items }: MenuItemsProps) {
  return (
    <div className="menu-items">
      <div className="menu-item">{items.title}</div>
    </div>
  );
}
