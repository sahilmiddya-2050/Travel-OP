import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`
const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`

export const statsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Over 1,000 Trips Made",
    desc: "Over 150 Trips completed last year",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Best Affordable Deals",
    desc: "We offer The Best price across India",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us ?</Heading>
      <Wrapper>
        {statsData.map((data, key) => {
          return (
            <StatsBox key={key}>
              <Icon>{data.icon}</Icon>
              <Title>{data.title}</Title>
              <Description>{data.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats
