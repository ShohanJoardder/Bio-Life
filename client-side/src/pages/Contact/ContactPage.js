import React from 'react'
import Layout from '../../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const ContactPage = () => {
  return (
    <Layout>
      <>
    
    <div>
  <div className="hero-section hero-background">
    <h1 className="page-title">Organic Fruits</h1>
  </div>
  <div className="container">
    <nav className="biolife-nav nav-86px">
      <ul>
        <li className="nav-item"><NavLink href="index-2.html" className="permal-link">Home</NavLink></li>
        <li className="nav-item"><span className="current-page">Contact</span></li>
      </ul>
    </nav>
  </div>
  <div className="page-contain contact-us">
    <div id="main-content" className="main-content">
      <div className="wrap-map biolife-wrap-map" id="map-block">
        <iframe width={1920} height={591} src="https://maps.google.com/maps?width=100%&height=263&hl=en&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=p&z=15&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
        </iframe>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="contact-info-container sm-margin-top-27px xs-margin-bottom-60px xs-margin-top-60px">
              <h4 className="box-title">Our Contact</h4>
              <p className="frst-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in NavLink piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              <ul className="addr-info">
                <li>
                  <div className="if-item">
                    <b className="tie">Addess:</b>
                    <p className="dsc">7563 St. Vicent Place, Glasgow, Greater<br />Newyork NH7689, UK</p>
                  </div>
                </li>
                <li>
                  <div className="if-item">
                    <b className="tie">Phone:</b>
                    <p className="dsc">(800) 123 456789</p>
                  </div>
                </li>
                <li>
                  <div className="if-item">
                    <b className="tie">Email:</b>
                    <p className="dsc">Organic@example.com</p>
                  </div>
                </li>
                <li>
                  <div className="if-item">
                    <b className="tie">Store Open:</b>
                    <p className="dsc">8am - 08pm, Mon - Sat</p>
                  </div>
                </li>
              </ul>
              <div className="biolife-social inline">
                <ul className="socials">
                  <li><NavLink href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true" /></NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="contact-form-container sm-margin-top-112px">
              <form action="#" name="frm-contact">
                <p className="form-row">
                  <input type="text" name="name" defaultValue placeholder="Your Name" className="txt-input" />
                </p>
                <p className="form-row">
                  <input type="email" name="email" defaultValue placeholder="Email Address" className="txt-input" />
                </p>
                <p className="form-row">
                  <input type="tel" name="phone" defaultValue placeholder="Phone Number" className="txt-input" />
                </p>
                <p className="form-row">
                  <textarea name="mes" id="mes-1" cols={30} rows={9} placeholder="Leave Message" defaultValue={""} />
                </p>
                <p className="form-row">
                  <button className="btn btn-submit" type="submit">send message</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    </Layout>
  )
}

export default ContactPage
