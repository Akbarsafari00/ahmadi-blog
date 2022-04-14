import React, {Component, ReactNode} from "react";
import Head from "next/head";
import styles from '../styles/Components/Header.module.scss'
import Link from "next/link";
import $ from 'jquery';

function HeaderComponent({title}:{title: string}) {
    return (
        <header className={styles.header}>
           <div className={styles.header__container}>
               <div className={styles.header__toggle} onClick={doClick}>
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
               <div className={styles.header__brand}>
                   <h4 className={styles.title}>xوبلاگ احمدی</h4>
               </div>
               <div className={styles.header__menu}>
                   <ul className={styles.menu}>
                       <li><Link href={"#"}>صفحه اصلی</Link></li>
                       <li><Link href={"#"}>مقالات</Link></li>
                       <li><Link href={"#"}>تماس با من</Link></li>
                   </ul>
               </div>
               <div className={styles.header__action}>
                   <Link  href={"#"}><span className={styles.login}>ورود</span></Link>
               </div>
           </div>
        </header>
    );
}

function doClick() {
    $("."+styles.header__menu).animate({width:'toggle'},200);
}
export default HeaderComponent;
