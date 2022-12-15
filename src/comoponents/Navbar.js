import React from 'react';
import { Component } from 'react';
import { Menu } from './Menu';
import "../comoponents/Navstyle.css"
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div className="nav">
                <h1 className="logo">React</h1>
                <div className="menuicon" onClick={this.handleclick}>
                    <span>
                        {this.state.clicked ? "O" : "C"}
                    </span>
                </div>
                <ul className="navmenu">
                    {Menu.map((item) => {
                        return (
                            <li className={item.cName}>
                                <i className={item.icon}></i>
                                <NavLink to={item.url}>{item.title}</NavLink>
                            </li>
                        )
                    })}
                    <button className='btnsign' type="submit">Sign Up</button>

                </ul>
            </div>
        )
    }
}
export default Navbar;