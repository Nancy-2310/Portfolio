import '../styles/globals.css';
import Transition from '../components/Transition';
//Components
import Layout from '../components/Layout';
import React from 'react';
//router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
      <Transition />
      <Component {...pageProps} />
      </motion.div>
     </AnimatePresence>      
  </Layout>
  ); 
}

export default MyApp;
