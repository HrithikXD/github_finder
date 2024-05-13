import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 footer-center bg-neutral">
        <p>Copyright &copy; {footerYear} All rights reserved HxH</p>
    </footer>
  )
}

export default Footer