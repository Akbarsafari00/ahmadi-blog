import React, {Component, ReactNode} from "react";
import Head from "next/head";
import styles from '../styles/Components/Card.module.scss'
import Link from "next/link";
import $ from 'jquery';
import Image from 'next/image'

function CardComponent({children}: { children: React.ReactNode })  {
    return (
        <div className={styles.card}>{children}</div>
    );
}


export default CardComponent;
