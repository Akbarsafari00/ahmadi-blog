import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { PrismaClient } from '@prisma/client'
import Layout from "../../components/Layout.component";
import Card from "../../components/Card.component";
import InputText from "../../components/InputText.component";
import InputButton from "../../components/InputButton.component";




const AuthLogin: NextPage = (props:any) => {
  return (
    <Layout title={"Index Page"} description={"Index Page"}>
      <Card>
        <form>
          <InputText label={"نام کاربری"} name={"username"} type={"email"}/>
          <InputText label={"کلمه عبور"} name={"password"}/>

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

