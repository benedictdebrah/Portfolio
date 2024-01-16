import React from 'react'

import Motion from '../components/motion'
import Metadata from '../components/metadata'
import Link from 'next/link'
import MainWrapper from '../components/mainWrapper'
import Main from '../components/innerWrapper'
import Card from '../components/card'
import Footer from '../components/footer'

const Playground = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title='Projects'
        description='My projects portfolio.'
        name='Benedict D.'
      />

      <Main display>
        <Link href='/'>
          <a className='backButton'>Back</a>
        </Link>
        <h1 className='heading2Xl'>Projects</h1>
        <section>
          <img src='/carbon.png' />
        </section>
        <p>
        Hey there! Welcome to my cool projects page, where I try to explain some of the stuff I've worked on.
         Take a look around, and if you have questions, hit me up. 
        </p>

        <div className='contentWrapper'>
        <Card
            link='https://www.tradingview.com/u/KwamePuni/'
            className='external mainCard'
            title='FX Market Analysis'
            description="My TradingView hangout where I spill the beans on market vibes! Check out my thoughts and let's navigate these charts together. 📈💡."

            type='Link'
            target='_blank'
          />

          <Card
            link='#'
            className='external mainCard'
            title='MNIST Project'
            description='MNIST project is a model with hand-written letters recognition.'
            type='Repository'
            target='_blank'
          />

          <Card
            link='#'
            className='external mainCard'
            title='Traffic Sign Recognition'
            description='Traffic Sign Recognition with convolutional neural networks. They are trained with images of traffic signs.'
            type='Repository'
            target='_blank'
          />

          <Card
            link='#'
            className='external mainCard'
            title='Explained SVM Model'
            description='SVM model explained with steps in Google Colab.'
            type='Repository'
            target='_blank'
          />

        
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
)

export default Playground
