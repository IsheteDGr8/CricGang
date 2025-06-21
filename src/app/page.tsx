import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center gap-8 text-lg font-bold">
          <Link href="/about-us">About-Us</Link>
          <Link href="/contact-us">Contact-Us</Link>
          <Link href="/login">Login</Link>
          <Link href="/sports">SportsPage</Link>
      </div>

      <p className="text-2xl font-bold text-center mt-10">
          Welcome to the Home Page!
      </p>

    </div>
  )
}

export default HomePage
