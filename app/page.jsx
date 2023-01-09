"use client"
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Main from "./components/Main"
import LoginForm from "./components/LoginForm"
import {useContext} from 'react';
import { AuthContext } from './contexts/auth';
// import Form from "./components/Form"

export default function Home() {
  const {tokens} = useContext(AuthContext);
  return (
    <>
    {tokens ? <Main /> : <LoginForm />}
    </>
  )
}
