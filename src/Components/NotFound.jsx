import React from 'react'

const NotFound = () => {
  return (
    <section className="bg-slate-200 w-screen h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
      No recent earthquakes found..
      </p>
     
    </div>
  </section>
  
  )
}

export default NotFound