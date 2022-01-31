import '../styles/reset.css'
import { GlobalStyle } from "../styles/global"
import { FontStyle } from "../styles/fonts"
import type { AppProps } from 'next/app'

import BaseLayoutComponent from 'components/layout/base'
import "swiper/css/bundle";


export default function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <FontStyle />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}
