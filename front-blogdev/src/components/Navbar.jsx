import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
          Blog <span>Dev</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to='/'
<<<<<<< HEAD
            className={({isActive}) => (isActive ? styles.active : null)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'
            className={({isActive}) => (isActive ? styles.active : null)}>Login</NavLink>
            </li>
          <li>
            <NavLink to='/register'
            className={({isActive}) => (isActive ? styles.active : null)}>Register</NavLink>
            </li>
          <li>
            <NavLink to='/about'
            className={({isActive}) => (isActive ? styles.active : null)}>About</NavLink>
            </li>
=======
            className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'
            className={({ isActive }) => (isActive ? styles.active : null)}>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'
            className={({ isActive }) => (isActive ? styles.active : null)}>Register</NavLink>
          </li>
          <li>
            <NavLink to='/about'
            className={({ isActive }) => (isActive ? styles.active : null)}>About</NavLink>
          </li>
>>>>>>> 5b378e34046013913859f0e6765c13050a2988fc
        </ul>
      </nav>
    </>
  )
}

export default Navbar