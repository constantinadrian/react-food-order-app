import React from "react";

import mealsImage from '../../assets/images/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header>
                <nav className={classes.header}>
                    <h1>React Meals</h1>
                    <HeaderCartButton onClick={props.onShowCart}/>
                </nav>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious meals"/>
            </div>
        </>
    );
};

export default Header;
