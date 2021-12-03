import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

    <main>
      <Sidebar />
      {/* Center */}
    </main>

    <div>
      {/* Player */}
    </div>
    </div>
  )
}
