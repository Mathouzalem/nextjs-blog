import React from "react"
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../styles/components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>My contact:</h1>
      <p>
        bonhommemathilde@gmail.com<br />
        France <br />
      </p>
    </Layout>

  )
}
