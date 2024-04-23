import { Heading } from '@/components/Body/Heading'
import { Heading2 } from '@/components/Body/Heading2'
import { Title } from '@/components/Body/Title'
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
  <main>
    <Navbar/>
    <Title/>
    <Heading/>
    <Heading2/>
    <Footer/>
  </main>
  )
}

export default page