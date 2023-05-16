import '@fontsource/roboto/500.css'
import '../app/styles/globals.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}