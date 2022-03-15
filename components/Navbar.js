import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/" ><h1 className={style.logo}>ChoiceTradingZone</h1></Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="#services">Services</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#technology">Technology</Link>
        </li>
        <li className={style.listItem}>
          <Link href="#contact">Contact Us</Link>
        </li>
       
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">Services</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">Technology</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">Contact</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;