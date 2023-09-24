import React from 'react'
import { Link } from 'react-router-dom'
import "./css/About.css"

function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container mt-3">
        <h2> Overview of Shiv Stationary </h2>
        <br />
        <div className="row justify-content-center">
          <div className="card mx-4 shape">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTJjQ9UCJQ_3tNkoUf31FHoLqnjEnHaaa2KIZAmG_Tp0HFJPn' className="card-img-top shadow-lg" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Founded in 1987</h5>
              <p className="card-text">Shiv Stationary is founded in 1987 and till now it is providing best services.
              </p>
              <Link to="/" className="btn btn-danger">Read More</Link>
            </div>
          </div>
          <div className="card mx-4 shape">
            <img src="https://www.holidify.com/images/bgImages/NOIDA.jpg" className="card-img-top shadow-lg" alt="..." />
            <div className="card-body">
              <h5 className="card-title">4 Branches In Delhi</h5>
              <p className="card-text">Over the period of time shiv stationary have more than one branches in delhi.
              </p>
              <Link to="/" className="btn btn-danger">Read More</Link>
            </div>
          </div>
          <div className="card mx-4 shape">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxPo0IsX_tGAR35ralW6lvlrNBMRWzbWjx3PtpiML0yBvqimAI" className="card-img-top shadow-lg" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Awarded Best Shop</h5>
              <p className="card-text">Shiv stationary provide best quality stationary items it is awarded best
                stationary award.</p>
              <Link to="/" className="btn btn-danger">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="container my-3">
        <h2> Details About shiv Stationary Are Listed Here</h2>

        <hr />
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 How We Started?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>At Shiv Stationery </strong>, we enlist thousands of stationery products that unknowingly become a part
                        of
                        our daily life at home, office, school or college. The wide list of products that our warehouse
                        stores in Paschim Vihar, New Delhi, is sure to cover your specific requirements.To complement
                        your workstation with innovative and resourceful stationary, we source our products from
                        all-over India .With affordable pricing, attractive offers and 100% genuine
                        products, we leave you awestruck.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Who is the Owner Of shiv Stationary?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>The owner of shiv stationary is Shivendra Singh.</strong>A 19-year-old dropout kid, who was just setting
                        up his first venture, envisioned what nobody thought would make him a business tycoon in the
                        hospitality industry. Once he began, there was no stopping this entrepreneur from reaching the
                        heights he has reached today. It is the passion and creative streak of Shivendra Singh.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How to Reach shiv Stationary
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              Shiv Stationary is located in J 5, Central Market, Block J, Lajpat Nagar II, Lajpat Nagar Part
                -2, New Delhi, Delhi 110024 or go to home page and click on view on Google Map.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              How To Download the shiv App?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              Shiv Stationary also have their personalise app on playstore and appstore. so, you can easily
              downlode it and then you can order any stationary item, books, any other thing online also.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              How to Avail Discount At shiv Stationary?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              You will mostly come across a lot of deals online during the sale that will only motivate you to
                        purchase more or combine your deals. Use it! Don't let it rot. A lot of websites will have
                        coupon codes that you might not find on the platform itself.you can take discount by buying the
                        product at a whole sale.so you will get the per product price lower than usual.
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

export default About