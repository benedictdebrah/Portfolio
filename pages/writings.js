import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Writings() {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Writings"
          description="Where I try to think and explain about software and technology."
          name="Benedict D."
        />
        <Main>
          <Link href="/">
            <a className="backButton">Back</a>
          </Link>
          <h1 className="heading2Xl">WRITINGS</h1>
          <p>
            This is the space where I try to explain about software, technology
            and economy. I thing that's the best way to learn.
          </p>
          <div className="contentWrapper">
            <Card
              link={`#`}
              className="mainCard"
              title={"How to Build ML Model Training Pipeline"}
              description={
                "This guide presents a step-by-step process for creating a versatile machine learning pipeline that's adaptable to various environments."
              }
              type={"Blog - Neptune"}
              target=""
              />
          </div>
        </Main>
      </MainWrapper>
      <Footer />
    </Motion>
  );
}
