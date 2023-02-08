import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Main } from './index.style'
import { Calculator } from '@/components/Calculator'
import { CalculatorProvider } from '@/pages/context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} page`}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator Challenge 5 #BoraCoda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CalculatorProvider>
          <Calculator />
        </CalculatorProvider>
      </Main>
    </div>
  )
}
