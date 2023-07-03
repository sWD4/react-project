import React from 'react'
import { Link } from 'react-router-dom'
import './css/Contact.css'

function Contact() {
  return (
   <>
   <br />
   <br />

  <div className="container-fluid contacts">
    <div className="row">
      <div className='col-sm-6 contact-us'>
        <h4 className='para'>CONTACT US FOR ANY QUERY </h4>
        <form className="ng-untouched ng-pristine ng-invalid">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" className="form-control ng-untouched ng-pristine ng-invalid"/>
          </div>
          <div className="form-group">
            <input type="text" name="email" placeholder="email"
              className="form-control ng-untouched ng-pristine ng-invalid"/>
          </div>
          <div className="form-group">
            <input type="number" name="mobile" placeholder="phone"
              className="form-control ng-untouched ng-pristine ng-invalid"/>
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="message"
              className="form-control ng-untouched ng-pristine ng-invalid"></textarea>
          </div>
          <div>
            <button className="btn btn-danger btn-lg shadow-lg">Submit</button>
          </div>
          <br/>
          <br/>
        </form>
      </div>
      <div className="col-sm-6 contact-us2">
        <h4 className='para'>CONTACT INFO</h4>
        <strong>Address</strong>
        <p> J 5, Central Market, Block J, Lajpat Nagar II, Lajpat Nagar Part -2, New Delhi, Delhi 110024</p>
        <strong>For Franchise Enquiry</strong>
        <p>
          Mobile:
          <b>
            <Link to="/" className='mobile'>1234567890</Link>
          </b>
          <br/>
          Email:
          <b>
            <Link to="/" className='mobile'>shiv@stationary.in</Link>
          </b>
        </p>
        <strong>For HR Enquiry</strong>
        <p>
          Mobile:
          <b>
            <Link to="/" className='mobile'>7858485769</Link>
          </b>
          <br/>
          Email:
          <b>
            <Link to="/" className='mobile'>stationary@shiv.in</Link>
          </b>
        </p>
        <strong>For Other Enquiry</strong>
      <p>
          Phone:
          <b>
            <Link to="/" className='mobile'>8956345678</Link>
          </b>
          <br/>
          Email:
          <b>
            <Link to="/" className='mobile'> customercare@stationary.in</Link>
          </b>
          <br/>
          Open: Monday – Saturday 10:30 – 9:30
      </p>
      </div>
    </div>
  </div>
  
   </>
  )
}

export default Contact