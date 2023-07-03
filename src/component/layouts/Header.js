import React from 'react'

function Header() {
  return (
        <>
         <nav class="navbar navbar-dark navbar-expand-md fixed-top">
         <div class="container-fluid">
         <div class="row">
         <a href="/" class="navbar-brand">
          <h1 class="animated infinite heartBeat weblogo">Shiv Stationary</h1>
         </a>
         </div>
      
        <button class="navbar-toggler collapsed" data-bs-target="#a" data-bs-toggle="collapse" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
        </button>
     
      <div class="navbar-collapse collapse" id="a">
        <ul class="navbar-nav ms-auto ">
          <li><a href="/" class="nav-link">HOME</a></li>
          <li><a href="/about" class="nav-link">ABOUT</a></li>
          <li><a href="/services" class="nav-link">OUR SERVICE</a></li>
          <li><a href="/contact" class="nav-link">CONTACT</a></li>
          <li><a href="/limited" class="nav-link">LIMITED EDITION</a></li>
          <li><a href="/login" class="nav-link">LOGIN</a></li>
        </ul>
      </div>
 </div>
         </nav>
        </>
   
  )
}

export default Header