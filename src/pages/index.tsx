import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Main, OpenCalculator, Texts, TextsContainer } from './index.style'
import { Calculator } from '@/components/Calculator'
import { CalculatorProvider } from '@/pages/context'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [openCalculator, setOpenCalculator] = useState(false)

  const handleOpenCalculator = (value: boolean) => () => {
    setOpenCalculator(value)
  }

  return (
    <div className={`${inter.className} page`}>
      <Head>
        <title>Calculator Challenge 05 #BoraCoda</title>
        <meta name="description" content="Calculator Challenge 05 #BoraCoda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <CalculatorProvider>
          {openCalculator ? <Calculator /> : null}
          {!openCalculator && (
            <TextsContainer>
              <Texts>
                <h1>
                  <strong>Challenge #05</strong> - Calculator
                </h1>
                <p>
                  and post on social media with the hashtag{' '}
                  <strong>#boraCodar</strong>.
                </p>
              </Texts>
              <OpenCalculator onClick={handleOpenCalculator(true)}>
                Open Calculator
              </OpenCalculator>
              <footer>
                <p>
                  &copy; 2023{' '}
                  <a href="https://github.com/tuliooov"> Tuliooov #BoraCodar</a>
                  <br></br>
                  Challenge 05 - Run until you fly!
                </p>
              </footer>
            </TextsContainer>
          )}
        </CalculatorProvider>
      </Main>
    </div>
  )
}
