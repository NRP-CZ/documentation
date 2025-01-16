import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import AskGPTButton from './components/AskGPTButton';

const config: DocsThemeConfig = {
  logo: (
    <div className='flex flex-row'>
      <img src='/img/e-infra/logo.svg' width='50' />
      <span className='px-3'>NRP Documentation</span>
    </div>
  ),
  footer: {
    content: <><div>NRP platform operated by <a className="nextra-focus _text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]" href="https://www.cesnet.cz">CESNET z.s.p.o.</a></div></>,
  },
  feedback: { 
    content: null
  },
  editLink: {
    component: null
  },
  toc: {
    extraContent: (
      <div className="w-full flex justify-center">
        <img src="/img/e-infra/header03.webp" className="w-40"/>
      </div>
    )
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light'
  },

  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'cz', name: 'Česky' },
  ],

  color: {
    hue: {
      light: 189.6,
      dark: 0
    },
    saturation: {
      light: 68.9,
      dark: 0
    }
  }
};

// value 95.7
//
// rgb 76 217 244  #4cd9f4
//     14 165 233
//

export default config;
