import React from 'react';
import classes from './Sidemenu.module.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { sideMenuItems } from '../logic/data/SideMenuItemList';


function SideMenu() {
    return (
        <aside className={`${classes.sideMenu}`}>
            <div className="mt-3">
                <ul>
                    {sideMenuItems.map((item) => {
                        return (
                            <MenuItemWidget menuItemClass={item} key={item.to} />
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
};

function MenuItemWidget({ menuItemClass }) {
    let resolved = useResolvedPath(`${menuItemClass.to}/*`);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link to={menuItemClass.to}>
            <li className={`${match ? classes.menuActive : null}`}>
                <div className="ps-4 py-3 d-flex align-items-center my-1 ms-2">
                    <menuItemClass.icon></menuItemClass.icon>
                    <span className='ms-4'>{menuItemClass.title}</span>
                </div>
            </li>

        </Link>
    )
}
export default SideMenu;