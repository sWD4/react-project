import React from 'react'

function Footer() {
  return (
    <>
     <footer class="py-3 bg-dark text-light">
    <div class="footer-main">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="footer-desc">
              <div class="logo-footer">
                <a href="/" className='text'>Shiv Stationary</a>
                <p>Stationery refers to commercially manufactured writing materials, including cut paper, envelopes,
                  writing implements, continuous form paper, and other office supplies.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-nav">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="about.html" className='text'>About us</a>
                </li>
                <li>
                  <a href="contact.html" className='text' >Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="social-media">
              <h4>Follow Us</h4>
              <ul>
                <li class="smedia-01">
                  <a href="/" className='text'>
                    <span class="media-icon">
                      <i class="fa-brands fa-facebook icon logo"></i>
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
                <li class="smedia-02">
                  <a href="/" className='text'>
                    <span class="media-icon">
                      <i class="fa-brands fa-twitter logo"></i>
                    </span>
                    <span >Twitter</span>
                  </a>
                </li>
                <li class="smedia-03">
                  <a href="/" className='text'>
                    <span class="media-icon">
                      <i class="fa-brands fa-square-instagram logo"></i>
                    </span>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-contact">

              <h4>Contact</h4>
              <p>Shiv Stationary is located in J 5, Central Market, Block J, Lajpat Nagar II, Lajpat Nagar Part -2, New
                Delhi, Delhi 110024</p>
              <p>
                <i class="fa fa-phone-square"></i>
                Phone: +91-751-23456789
              </p>
              <p>
                <i class="fa fa-envelope"></i>
                E-mail:
                <a href="/" className='text'>stationary@shiv.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-foot">
      <div class="container">
        <p class="text-center">
          Copyright © 2023 - Design & Developed by
          <a href="/" className='text'>Shubham Sharma</a>
        </p>
      </div>
    </div>
     </footer>
    </>
  )
}

export default Footer