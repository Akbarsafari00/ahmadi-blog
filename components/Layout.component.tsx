import {Component} from "react";
import Head from "next/head";
import HeaderComponent from "./Header.component";
import styles from "../styles/Home.module.scss";


function LayoutComponent({children,title , description}: { children: React.ReactNode , title:string ,description:string}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <HeaderComponent title={title}/>
            <main className={"test"}>
                <div>
                    <main>{children}</main>
                </div>
            </main>
        </>
    );
}

export default LayoutComponent;