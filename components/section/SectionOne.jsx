import React from 'react'
import BookForm from '../form/book/bookForm'

function SectionOne() {
  return (
    <section className="mt-7 py-0">
        <div
          className="bg-holder w-50 bg-right d-none d-lg-block"
          style={{
            backgroundImage: `url("assets/img/gallery/flatbed-tow-truck.jpg")`,
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-2 text-1000 fw-normal">
                Get connected to
              </h1>
              <h1 className="display-4 text-primary  fw-bold">
                the best towing services
              </h1>
              <BookForm />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionOne