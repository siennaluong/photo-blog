import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import MDX from 'gatsby-theme-amsterdam/src/components/MDX'
import ProgressIndicator from 'gatsby-theme-amsterdam/src/components/ProgressIndicator'
import styled from '@emotion/styled'


const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const List = styled.ol`
  line-height: 1.25;
  margin: 0 0 1.75rem;
  li {
    list-style: decimal;
    list-style-position: inside;
    margin: 0 0 0.5rem 0;
    &:last-child {
      margin: 0;
    }
  }
`
const H3 = styled.h3`
  font-weight: ${props => props.theme.fonts.boldWeight};
  font-size: 1.2rem;
  line-height: 1.75;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.35rem;
  }
`


const GoalPage = ({ data }) => {
  return (
    <Container>
      <SEO title="Learn" description="Skills and knowledge I want to pick up" />
      <Title>I want to...</Title>
      <Content>
        <p style={{fontStyle: 'italic'}}>The list does not follow any order and is still subject to future changes</p>
        <H3>Technical:</H3>
        <List>
          <li>Have a foundational understanding of Machine Learning</li>
          <li>Solve Leetcode medium questions in under 20 minutes</li>
          <li>Build an Arduino robot</li>
          <li>Win Apple WWDC challenge</li>
          <li>Build a MERN stack application</li>
          <li>Design a software system</li>
          <li>Have a good grasp of OOP</li>
          <li>Build a "build your own" project</li>
        </List>
        <H3>Cooking/baking:</H3>
        <List>
          <li>Make a true carbonara</li>
          <li>Make an apple pie</li>
          <li>Make a tomato soup with grilled cheese</li>
          <li>Make a true bun cha</li>
          <li>Make a good batch of macaron</li>
          <li>Make those salmon muffin bowls</li>
          <li>Make the teokbokki sauce</li>
        </List>
        <H3>Know something about:</H3>
        <List>
          <li>Astrophysics</li>
          <li>History of mankind</li>
          <li>The Vietnamese History</li>
          <li>The British History</li>
          <li>The Chinese History</li>
          <li>The German History</li>
          <li>The Japanese History</li>
          <li>invest/trade stocks</li>
          <li>computational neuroscience</li>
        </List>
        <H3>Fitness:</H3>
        <List>
          <li>Hike a trail a month</li>
          <li>Participate in a marathon</li>
        </List>
        <H3>Languages:</H3>
        <List>
          <li>Achieve DELF A2 in French</li>
          <li>Have a simple conversation in German</li>
          <li>Achieve N5 in Japanese</li>
          <li>Finish that mobile Mandarin course</li>
        </List>
      </Content>
    </Container>
  )
}

export default GoalPage
