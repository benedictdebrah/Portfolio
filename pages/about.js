import React from 'react'
import Motion from '../components/motion'
import Metadata from '../components/metadata'
import Link from 'next/link'
import MainWrapper from '../components/mainWrapper'
import Main from '../components/innerWrapper'
import Footer from '../components/footer'

const About = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title='About'
        description='Data Scientist.'
        name='Benedict O. Debrah'
      />
      <Main>
        <Link href='/'>
          <a className='backButton'>Back</a>
        </Link>
        <h1 className='heading2Xl'>Hey,</h1>
        <div className='contentWrapper'>
        <section>
    <img src='/me2.jpg' style={{ 'border-radius': '20px', 'width': '400px', 'height': '400px' }} />
</section>

          <section>
            <p>
              <span className='dropCap'>A</span>s a Machine Learning Engineer at Soccersm AI,  I develop and implement machine learning models
               to analyze historical data, player performance, and match statistics.
                My role involves optimizing algorithms for accurate predictions,
                contributing to the company's data-driven strategies,
               and staying updated on the latest advancements in machine learning for sports analytics.
            </p>
            <p>My career began as a Market Research Analyst at Wookins platform,
               focusing intensively on market competition and data analytics in the e-commerce industry. 
               As a Market Research Analyst, one of my key tasks was to conduct thorough market research to gather 
               and analyze data related to the e-commerce industry. This involved studying market trends,
                consumer behavior, and competitor activities to provide valuable insights for strategic decision-making. 
            </p>
            <p>
            With a solid track record in the financial markets as a trader and a certified financial analyst,
             I specialize in financial modeling and valuation. My expertise lies in leveraging AI/ML tools, 
             Deep Learning frameworks, and sophisticated statistical methods to drive innovation and achieve
              sustainable results. I possess a comprehensive technical skill set, including proficiency in Python
               programming, hands-on experience with Deep Learning/Machine Learning frameworks, a strong command 
               of SQL, and familiarity with AWS Cloud services. My portfolio encompasses diverse projects in predictive modeling,
             data analysis,  model deployment, and advanced statistical modeling.
            </p>
            <p>
              Fluent in English and with basic knowledge of French, I consistently endeavor to expand both my linguistic and technical abilities.
            </p>
            <p>Recently, I have delved deeper into trading the financial markets, leveraging my experience and skills in data analysis and prediction. I am actively exploring the application
             of reinforcement learning techniques in the financial markets
              as part of my ongoing journey. </p> 
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
)

export default About
