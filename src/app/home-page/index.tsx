import React from 'react'
import Hero from '@/components/home-page/Hero'
import About from '@/components/home-page/Mission'
import Menu from '@/components/home-page/Our-Programs'
import Events from '@/components/home-page/Events'
import Entertainment from '@/components/home-page/Endowment-Features'
import Team from '@/components/home-page/TheFreeForCharityTeam'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'

const HomePage = () => {
  return (
    <div className="bg-[#FDF8F3]">
      <Hero />
      <About />
      <Menu />
      <Events />
      <Entertainment />
      <Team />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default HomePage
