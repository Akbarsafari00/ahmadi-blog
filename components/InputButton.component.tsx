import React, {Component, ReactNode} from "react";
import Head from "next/head";
import styles from '../styles/Components/InputButton.module.scss'
import Link from "next/link";
import $ from 'jquery';
import Image from 'next/image'

function InputButton({type = "button", value }: {   type?: string,  value: string }) {
    return (
        <input className={styles.button_input} type={type}  value={value} />
    );
}


export default InputButton;
