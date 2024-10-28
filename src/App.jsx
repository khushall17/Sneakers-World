import React from 'react'
import Navbar from './components/pages/Navbar'
import Hero from './components/pages/Hero'
import PopularProducts from './components/pages/PopularProducts'
import Quality from './components/pages/Quality'
import Deals from './components/pages/Deals'
import Subscribe from './components/pages/Subscribe'
import Footer from './components/pages/Footer'
import AboutUs from './components/pages/AboutUs'


function App() {

  return (
  <main className="relative">
    <Navbar/>
    <section className=" xl:padding-l wide-padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className=" padding">
      <Quality/>
    </section>
   
    <section className="padding">
      <Deals/>
    </section>
    <section className="padding">
      <AboutUs/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>
  </main>
  )
}

export default App
