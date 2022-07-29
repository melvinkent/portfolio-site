import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Header from '../components/header';
import Profile from '../components/profile';
import Footer from '../components/footer';
import React, {useEffect, useState} from 'react';
import Images from '../components/images';


function MyApp({ Component, pageProps }: AppProps) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    )
  })

  return (
    <Layout>
    <div className='text-slate-700 flex flex-col gap-4'>
      <Header />
      <Component {...pageProps} />
      <Images data = { images} />
      <Footer />
    </div>
    </Layout>
    );
}

export default MyApp