import React from 'react'
import { Link } from 'react-router-dom'
import './css/Services.css'

function Services() {
  return (
   <>
    <br />
    <br />
    <br />   
  <div className="container-fluid">
  <div className="container">
    <h2 className="text-center ml-1">Stationary Item</h2>
    <br/>
    <div className="row">
      <div className="col-md-8">
        <p className="text-justify family-content">
          All type of stationary item you get hear at a affordable price. Stationaries shops were places where books
          were bound, copied, and published. These shops often loaned books to nearby university students for a fee.
          The books were loaned out in sections, allowing students to study or copy them, and the only way to get the
          next part of the book was to return the previous section. In some cases, stationers' shops became the
          preferred choice for scholars to find books, instead of university libraries due to stationers' shops' wider
          collection of books.The Stationers' Company formerly held a monopoly over the publishing industry in
          England and was responsible for copyright regulations. items such as pen,pencil,copy,calculators etc.
        </p>
        <Link to="/" className="btn btn-danger btn-lg shadow-lg box" >Order Now</Link>
      </div>
      <div className="col-md-4 text-center">
        <img src="./images/y.png" alt='' className="shadow-lg"/>
      </div>
    </div>
  </div>
    </div>
    <hr/>
    
    <div className="container">
  <h2 className="text-center ml-1">
    ALL TYPE OF XEROX AVAILABLE
  </h2>
  <br/>
  <div className="row">
    <div className="col-lg-4 text-center">
      <img src="./images/l.jpeg" alt='' className="shadow-lg"/>
    </div>
    <div className="col-lg-8 text-left">
      <p className="xerox text-justify">
        Photocopy,color printouts, black in white printouts ,A4 size,A3 size photocopy every thing you get
        hear.Photocopying is widely used in the business, education, and government sectors. While there have been
        predictions that photocopiers will eventually become obsolete as information workers increase their use of
        digital document creation, storage, and distribution and rely less on distributing actual pieces of paper, as
        of 2015, photocopiers continue to be widely used.Low-end machines that can copy and print in color have
        increasingly dominated the home-office market as their prices fell steadily during the 1990s. High-end color
        photocopiers capable of heavy-duty handling cycles and large-format printing remain a costly option found
        primarily in print and design shops.
      </p>
      <Link to="" className="btn btn-danger btn-lg shadow-lg">Order Now</Link>
    </div>
  </div>
    </div>
    <hr/>
    <div className="container-fluid">
  <div className="container">
    <h2 className="text-center ml-1">
      ALL UNIVERSITIES BOOKS AND THESIS
    </h2>
    <br/>
    <div className="row">
      <div className="col-md-8">
        <p className="text-justify family-content">
          All universities books and thesis such as RGPV, AKTU and private universities. Books also available for
          classNamees 9,10,11,12.A book is a medium for recording information in the form of writing or images, typically
          composed of many pages made of papyrus, parchment, vellum, or paper bound together and protected by a
          cover. The technical term for this physical arrangement is codex plural, codices. In the history of
          hand-held physical supports for extended written compositions or records, the codex replaces its
          predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
        </p>
        <Link to="/" className="btn btn-danger btn-lg">
          Order Now</Link>
      </div>
      <div className="col-md-4 text-center">
        <img
          src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png"
          className="shadow-lg" alt=''/>
      </div>
    </div>
  </div>
    </div>
    <br />
    <br />


    </>
  )
}

export default Services