import React from 'react'

function Hero() {
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="title.png" alt="hero image"/>
        </div>
        <video src='videos/hero.mp4' muted autoPlay></video>
        <button>Buy</button>
        <p>From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  )
}

export default Hero