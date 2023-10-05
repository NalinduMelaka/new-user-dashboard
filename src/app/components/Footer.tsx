import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-800 text-white p-4 text-center sticky bottom-0 left-0 w-full mt-10 ">
      &copy; {currentYear} PDF
    </footer>
   
  )
}

export default Footer
