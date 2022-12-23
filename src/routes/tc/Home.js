import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import SideMenu from '../../components/Sidemenu.js';
import { sideMenuItems } from '../../logic/data/SideMenuItemList';
import classes from './Home.module.css';

function Home() {
    return (
        <div className={classes.home}>
            <NavBar />
            <div className={classes.bodyWrapper}>
                <SideMenu></SideMenu>
                <div className={classes.homeWrapper}>
                    <HomeRoutes />
                </div>
            </div>
        </div>);
};

function HomeRoutes() {
    return (
        <Routes>
            {sideMenuItems.map((item) => {
                return (
                    <Route path={`${item.to}/*`} element={item.component} key={item.to}/>)
            })}
        </Routes>
    )
}



export default Home;