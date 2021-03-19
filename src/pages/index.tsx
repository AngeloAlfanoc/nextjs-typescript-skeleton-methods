import Head from "next/head"
import Font from '../components/fonts'


const index = () => {
  return (
    <>
      <Head>
      <Font font="Roboto"/>
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <title>Homepage | App</title>
      </Head>

      </>
  )
}

export default index;