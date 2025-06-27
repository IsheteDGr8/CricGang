import Link from 'next/link'
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
        <div>AboutUs</div>
        <div className="flex justify-center gap-8 text-lg font-bold">
        <Link href="/about-us/ishaan">Ishaan</Link>
        <Link href="/about-us/shlok">Shlok</Link>
        </div>
    </>
  )
}

export default AboutUsPage