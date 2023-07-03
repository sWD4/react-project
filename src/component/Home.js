import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Home.css"

function Home() {
  return (
<>
      <div className="carousel slide" data-bs-ride="carousel" id="aa">
      <div className="carousel-indicators">
      <button type="button" data-bs-target="#aa" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#aa" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#aa" data-bs-slide-to="2"></button>
      </div>

    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="4000">

        <img src="https://www.stationerybazaar.com/images/pzen_slideshow/back-school-concept_1623598730.jpg"
          className="w-100 banner"
         alt="..."/>
        <div className="carousel-caption">
          <h1 className="text-center ch1 content1">WIDEST RANGE OF STATIONARY<br/> PRODUCT</h1>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">

        <img
          src="https://www.stationerybazaar.com/images/pzen_slideshow/colorful-stationery-multicolored-background_1623598949.jpg"
          className="w-100 banner" alt="..."/>
        <div className="carousel-caption">
          <h1 className="text-center ch1 content2" >OFFICE PRODUCTS SALE <br/> OFF TO 50%</h1>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">

        <img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5d40461359a6e.jpeg" className="w-100 banner" alt="..."/>
        <div className="carousel-caption">
          <h1 className="text-center ch1 content3">WIDE RANGE OF ART <br/> PRODUCT</h1>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#aa" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#aa" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
      </div>
      <br />
      <br />
      <div className="container">
       <div className="row">
      <div className="col-md-4 text-center">
        <img
          src="https://media.istockphoto.com/id/490658849/photo/office-tools.jpg?s=612x612&w=0&k=20&c=ObLmefishVUSs3a4-e8xGpzAGkrSCZO1zoVjVQjWaBk="
          className="bd-placeholder-img rounded-circle" alt=''  width="140" height="140"/>
        <h2>Buy Crayons</h2>
        <p className='text1'>Manipulating crayons improves a child's dexterity and fine motor skills.
          Coloring improves hand-eye
          coordination, which is essential in learning to write letters. Kids learn about force with crayons. A mark can
          be light or very dark depending on the amount of pressure they use when they draw. 
        </p>
        <p>
        <Link className="btn btn-danger "to="/" role="button">View details »</Link>
        </p>
       
      </div>
      <div className="col-md-4 text-center">
        <img
          src="https://media.istockphoto.com/id/485725200/photo/school-and-office-accessories-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PWgiIA-7_QDC_PXnEhwZqDLDDzrNMIxxJjBeD4h4oLM="
          className="bd-placeholder-img rounded-circle" alt='' width="140" height="140" />
        <h2>Buy classmate copies</h2>
        <p className='text2'>classmate is an Indian brand of student stationery products.classmate added
          pens ,pencils ,mechanical pencils
          and geometry boxes to its portfolio.It uses eco-friendly and elemental chlorine-free paper.it will help you to
          give better writing experience. </p>
        <p><Link className="btn btn-danger"to="/" role="button">View details »</Link></p>
      </div>
      <div className="col-md-4 text-center">
        <img src="https://s3.envato.com/files/340217945/AS6945.jpg" className="bd-placeholder-img rounded-circle"
          width="140" height="140" alt='' />
        <h2>Get Your Books Printed</h2>
        <p className='text3'>Print books have the feel of a book that many readers love. You can hold it,
          turn the pages, and feel the
          paper.People who love to read spend a lifetime acquiring books. They may find it wrenching to abandon their
          shelves
          of books for a single slab of plastic.</p>
        <p><Link className="btn btn-danger"to="/" role="button">View details »</Link></p>
      </div>
    </div>

      </div>
  

      <div className="pattern">
    <div className="container pencil">
      <div className="clearfix">
        <h1>Desk Accessories </h1>
      </div>
    </div>
      </div>

      <div className="main-content full-width inner-page">
    <div className="background-content"></div>
    <div className="background">
      <div className="shadow"></div>
      <div className="pattern">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 center-column content-without-background">
                  <div>
                    <div className='density'>&nbsp;</div>
                    <div className="row">
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/glue-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Adhesives & Glues</Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/calculators-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image' >Calculators</Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/misclleneous-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image' >Miscellaneous Stationery </Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/paper-clips-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/"className='image' >Paper Clips </Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/cutters-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Paper Cutters</Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/punches-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Paper Punches </Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/scissors-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Scissors </Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/staplers-228x228.png" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Staplers, Removers</Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/sticky-notes-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Sticky Notes </Link>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <Link to="/" className="cat-image">
                          <img src="https://www.stationeryhut.in/image/cache/data/tapes-228x228.jpg" alt=""/>
                        </Link>
                        <div className="name">
                          <Link to="/" className='image'>Tapes</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <br />
      <br />
</>
  )
}

export default Home