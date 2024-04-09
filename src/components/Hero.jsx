import React from 'react'

function Hero({idd = "",  title = "", klass = ""}) {
  return (
    <>
    <div id={idd} className={klass}>
        <h2>{title}</h2>
    </div>
    </>
  )
}

export default Hero