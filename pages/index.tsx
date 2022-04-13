import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LayoutComponent from '../components/Layout.component'
import { PrismaClient } from '@prisma/client'




const Home: NextPage = (props:any) => {
  return (
    <LayoutComponent title={"Index Page"} description={"Index Page"}>
        <h1 className={styles.title}>
        </h1>
    </LayoutComponent>
  )
};

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allUsers = await prisma.user.findMany({});
    console.log(allUsers);
  return { props: { allUsers } }
};


export default Home

