import Link from 'next/link'
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
        <div className="flex justify-center gap-8 text-lg font-bold">
        <Link href="/about/about-us">About-Us</Link>
        <Link href="/about/contact-us">Contact-Us</Link>
        </div>
    </>
  )
}

export default AboutUsPage