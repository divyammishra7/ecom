import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/Artboard.png'
import heroBcg2 from '../assets/Artboard2.png'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className='content'>
      <h1>Authentic In <br/>Nature</h1>
      <p>Mythila presents Madhubani Art that represents a holistic universe, inundated with deities, sun and moon, flora and fauna, among others. Due to the growing demand of this Madhubani, the artists cease to confine themselves to walls and we therefore are enthused to bring you closer to products showcasing the intricacies and sophistication of Madhubani Art.</p>
      <Link to='/products' className='btn hero-btn'>Shop Now</Link>
    </article>
<article className='img-container'>
  <img src={heroBcg} className="main-img" alt='banner-img'></img>
  <img src={heroBcg2} className="accent-img" alt='banner-support-img'></img>
</article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
