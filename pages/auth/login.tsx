import {GetServerSideProps, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Layout from "../../components/Layout.component";
import Card from "../../components/Card.component";
import InputText from "../../components/InputText.component";
import InputButton from "../../components/InputButton.component";
import {ChangeEvent, FormEventHandler} from "react";

import {useState} from 'react'




const AuthLogin: NextPage = (props: any) => {

    const [form, setForm] = useState({
        username: undefined,
        password: undefined
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value});
    };

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            username:form.username,
            password: form.password,
        };

        // Send the data to the server in JSON format.
        const JSONData = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/auth/login'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONData,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.email}`)
    };

    return (
        <Layout title={"Index Page"} description={"Index Page"}>
            <Card>
                <form  onSubmit={onSubmit}>
                    <InputText label={"نام کاربری"} name={"username"} type={"email"} onChange={handleChange}/>
                    <InputText label={"کلمه عبور"} name={"password"} type={"password"} onChange={handleChange}/>
                    <InputButton value={"ورود"} type={"submit"}/>
                </form>
            </Card>
        </Layout>
    )
};



export default AuthLogin

