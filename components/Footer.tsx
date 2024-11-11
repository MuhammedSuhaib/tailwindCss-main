import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div  className="bg-[#2c3e50] justify-center text-center py-10 text-gray-950 ring-4">
      <p>Reach out: info@example.com | Follow us for more cosmic updates.</p>
      <p>“© 2024 Exploring the universe, one discovery at a time.”</p>
      Connect me:{" "}
            <Link
              href="https://www.linkedin.com/in/suhaib1/"
              target="_blank"
              rel="noopener noreferrer"
             className='underline  bg-transparent shadow-md text-violet-600 shadow-cyan-300 hover:text-green-400 '>
              {" "}
              Linkedin
            </Link>{" "}
    </div>
  )
}

export default Footer
