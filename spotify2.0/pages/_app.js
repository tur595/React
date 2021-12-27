import { SessionProvider } from 'next-auth/react'
import 'tailwindcss/tailwind.css'
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Recoilroot>
       <Component {...pageProps} />
      </Recoilroot>
    </SessionProvider>
  )
}

export default MyApp
