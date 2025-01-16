import '../styles/global.css';
import { ThemeProvider } from 'next-themes'
import { useState, useContext } from 'react';
import { GlobalContext, GlobalContextValue } from '../contexts/globalContext';
import { SessionProvider } from "next-auth/react";
import Modal from '../components/Modal';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [globalContext, setGlobalContext] = useState<GlobalContextValue>({
    modalContent: null,
    isModalVisible: false,
  });

  return (
    <>
      <SessionProvider session={session}>
      <ThemeProvider forcedTheme="light">
      <GlobalContext.Provider
        value={{ value: globalContext, setValue: setGlobalContext }}>
        {globalContext.isModalVisible && <Modal />}
        <Component {...pageProps} />
      </GlobalContext.Provider>
      </ThemeProvider>
      </SessionProvider>
    </>
  );
}
