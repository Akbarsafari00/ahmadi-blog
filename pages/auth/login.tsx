import {GetServerSideProps, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {PrismaClient} from '@prisma/client'
import Layout from "../../components/Layout.component";
import Card from "../../components/Card.component";
import InputText from "../../components/InputText.component";
import InputButton from "../../components/InputButton.component";
import {ChangeEvent, FormEventHandler} from "react";

import {useState} from 'react'


const AuthLogin: NextPage = (props: any) => {

    const [form, setForm] = useState({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value});
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
    };

    return (
        <Layout title={"Index Page"} description={"Index Page"}>
            <Card>
                <form onSubmit={onSubmit}>
                    <InputText label={"نام کاربری"} name={"username"} type={"email"} onChange={handleChange}/>
                    <InputText label={"کلمه عبور"} name={"password"} type={"password"} onChange={handleChange}/>
                    <InputButton value={"ورود"} type={"submit"}/>
                </form>
            </Card>
        </Layout>
    )
};

// const prisma = new PrismaClient();

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // const allUsers = await prisma.user.findMany({});
//   //   console.log(allUsers);
//   // return { props: { allUsers } }
// };


export default AuthLogin

