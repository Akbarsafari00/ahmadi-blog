import React, {ChangeEventHandler, Component, ReactNode} from "react";
import Head from "next/head";
import styles from '../styles/Components/InputText.module.scss'
import Link from "next/link";
import $ from 'jquery';
import Image from 'next/image'

function InputText({label, type = "text", name, id = name, value = "",onChange}: { onChange: any, label: string, name: string, type?: string, id?: string, value?: string }) {
    return (
        <>
            <div className={styles.text_input}>
                <label>{label}</label>
                <input type={type} name={name} id={name} onChange={onChange}/>
            </div>
        </>
    );
}


export default InputText;
