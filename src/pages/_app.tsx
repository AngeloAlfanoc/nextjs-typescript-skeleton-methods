import 'normalize.css'
import 'animate.css'
import 'bootstrap-utilities'
import '../assets/styles/main.scss'


import Head from 'next/head';
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { useEffect, useState } from 'react'





export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const [classes] = useState(typeof window !== 'undefined' && document.querySelectorAll('[class^="jss"],[class*=" jss"]'))

  useEffect(() => {
    classes.forEach((item) => {
      const tempArr = item.classList;
      tempArr.forEach((item) => {
        if (item.substr(0, 3) === 'jss') {
          try {
              tempArr.contains(item) && tempArr.remove(item)
          }
          catch{
            console.error('error 409')
          }
        }
      })
    })
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component  {...pageProps} />
    
    </Provider>
  )
}