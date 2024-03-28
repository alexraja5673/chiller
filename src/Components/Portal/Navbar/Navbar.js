import React from 'react'
import './Navbar.css'
import logo from '../../../Assets/images/logo.png'

function Navbar() {
  return (
    <div class="hero">
        <nav>
            <div class="hh">
                <div class="logo"><img src={logo} alt="logo" /></div>
                <div class="hambargar">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Feautures</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <i class="fa-solid fa-user profileIcon"></i>
            </ul>
            <div class="sub-menu-wrap" id="profileMenu">
            <div class="sub-menu">
                <div class="user-info">
                <img src="https://www.happierhuman.com/wp-content/uploads/2019/07/joking-man.jpg?ezimgfmt=rs:400x426/rscb1" alt="" />
                <h3>Haitham Ethaalibi</h3>
                </div>
            
                <div class="menu-link">
                <a href="#"><i class="fa-solid fa-user"></i>
                    <h4> Edit Profile <span>&gt;</span></h4>
                </a>
                <a href="#"><i class="fa-solid fa-gear"></i>
                    <h4> Settings <span>&gt;</span></h4>
                </a>
                <a href="#"><i class="fa-solid fa-circle-info"></i>
                    <h4> Help & Support <span>&gt;</span></h4>
                </a>
                <a href="#"><i class="fa-solid fa-right-from-bracket"></i>
                    <h4> LogOut <span>&gt;</span></h4>
                </a>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar