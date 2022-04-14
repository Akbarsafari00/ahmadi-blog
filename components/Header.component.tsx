import React, {Component, ReactNode} from "react";
import Head from "next/head";
import styles from '../styles/Components/Header.module.scss'
import Link from "next/link";
import $ from 'jquery';
import Image from 'next/image'

function HeaderComponent({title}: { title: string }) {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__toggle} onClick={doClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.header__brand}>
                    <h4 className={styles.title}>وبلاگ احمدی</h4>
                </div>
                <div className={styles.header__menu}>
                    <ul className={styles.menu}>
                        <li><Link href={"#"}>صفحه اصلی</Link></li>
                        <li><Link href={"#"}>مقالات</Link></li>
                        <li><Link href={"#"}>تماس با من</Link></li>
                    </ul>
                </div>
                <div className={styles.header__action}>
                    <Link href={"#"}><a className={styles.login}><Image src={"/svg/noun-user-4756261.svg"} width={24}
                                                                        height={24}/></a></Link>
                    <Link href={"#"}><a className={styles.search}><Image src={"/svg/noun-search-1868248.svg"} width={24}
                                                                        height={24}/></a></Link>
                </div>
            </div>
        </header>
    );
}

function doClick() {
    $("." + styles.header__menu).animate({width: 'toggle'}, 200);
}

export default HeaderComponent;
