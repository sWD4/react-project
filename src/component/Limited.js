import React from 'react'
import { Link } from 'react-router-dom'
import './css/Limited.css'

function Limited() {
  return (
    <>
    <br />
    <br />
    <br />
    <div className="container mb-4">
        <h2 className="head">
            Limited Edition Deals</h2>
            <div className="row">
                <div className="col-md-3 py-3 ">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2020/12/whatsapp-image-2020-12-09-at-191444-2-300x300.jpeg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="" className='photo'>Parker pen</Link>
                        <h4 className="name">RS 1500 <del>RS 2,500</del>(30% off)</h4>
                    </div>
                
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2020/12/white-nights-pastel-palette-300x300.jpeg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Water Color</Link>
                        <h4 className="name">RS 500 <del>RS 800</del>(20% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2022/06/POSCA-2-300x300.jpg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Uni Marker</Link>
                        <h4 className="name">RS 450 <del>RS 600</del>(38% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2020/08/uniball-posca-set-of-16-5m-tip-300x300.jpeg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Highlight Pen</Link>
                        <h4 className="name">RS 300 <del>RS 600</del>(50% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2022/06/POSCA-2-1-300x300.jpg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Sketch Pen</Link>
                        <h4 className="name">RS 100 <del>RS 250</del>(75% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2020/10/whatsapp-image-2020-09-21-at-53251-pm-300x300.jpeg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Compass Box</Link>
                        <h4 className="name">RS 250 <del>RS 500</del>(50% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2022/06/posca-set-3-300x300.jpg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Colors sets</Link>
                        <h4 className="name">RS 2,500 <del>RS 3,000</del>(15% off)</h4>
                    </div>
                </div>
                <div className="col-md-3 py-3">
                    <img src="https://www.sitaramstationers.com/wp-content/uploads/2020/04/61L9gjWZLfL-1-300x300.jpg"
                        className="w-100" alt=''/>
                    <div className="name">
                        <Link to="/" className='photo'>Add Gel Brushes</Link>
                        <h4 className="name">RS 750 <del>RS 1050</del>(30% off)</h4>
                    </div>
                </div>
            </div>

          </div>
    </>
  )
}

export default Limited