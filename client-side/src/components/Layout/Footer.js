import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div>
  <footer id="footer" className="footer layout-03">
    <div className="footer-content background-footer-03">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-9">
            <section className="footer-item">
              <NavLink href="index-2.html" className="logo footer-logo"><img src="assets/images/organic-3.png" alt="biolife logo" width={135} height={34} /></NavLink>
              <div className="footer-phone-info">
                <i className="biolife-icon icon-head-phone" />
                <p className="r-info">
                  <span>Got Questions ?</span>
                  <span>(700)&nbsp; 9001-1909  (900) 689 -66</span>
                </p>
              </div>
              <div className="newsletter-block layout-01">
                <h4 className="title">Newsletter Signup</h4>
                <div className="form-content">
                  <form action="#" name="new-letter-foter">
                    <input type="email" className="input-text email" value="" defaultValue placeholder="Your email here..." />
                    <button type="submit" className="bnt-submit" name="ok">Sign up</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
            <section className="footer-item">
              <h3 className="section-title">Useful Links</h3>
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-6">
                  <div className="wrap-custom-menu vertical-menu-2">
                    <ul className="menu">
                      <li><NavLink href="#">About Us</NavLink></li>
                      <li><NavLink href="#">About Our Shop</NavLink></li>
                      <li><NavLink href="#">Secure Shopping</NavLink></li>
                      <li><NavLink href="#">Delivery infomation</NavLink></li>
                      <li><NavLink href="#">Privacy Policy</NavLink></li>
                      <li><NavLink href="#">Our Sitemap</NavLink></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6">
                  <div className="wrap-custom-menu vertical-menu-2">
                    <ul className="menu">
                      <li><NavLink >Who We Are</NavLink></li>
                      <li><NavLink >Our Services</NavLink></li>
                      <li><NavLink >Projects</NavLink></li>
                      <li><NavLink to="/contact">Contacts Us</NavLink></li>
                      <li><NavLink >Innovation</NavLink></li>
                      <li><NavLink >Testimonials</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
            <section className="footer-item">
              <h3 className="section-title">Transport Offices</h3>
              <div className="contact-info-block footer-layout xs-padding-top-10px">
                <ul className="contact-lines">
                  <li>
                    <p className="info-item">
                      <i className="biolife-icon icon-location" />
                      <b className="desc">7563 St. Vicent Place, Glasgow, Greater Newyork NH7689, UK </b>
                    </p>
                  </li>
                  <li>
                    <p className="info-item">
                      <i className="biolife-icon icon-phone" />
                      <b className="desc">Phone: (+067) 234 789  (+068) 222 888</b>
                    </p>
                  </li>
                  <li>
                    <p className="info-item">
                      <i className="biolife-icon icon-letter" />
                      <b className="desc">Email:  contact@company.com</b>
                    </p>
                  </li>
                  <li>
                    <p className="info-item">
                      <i className="biolife-icon icon-clock" />
                      <b className="desc">Hours: 7 Days NavLink week from 10:00 am</b>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="biolife-social inline">
                <ul className="socials">
                  <li><NavLink href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true" /></NavLink></li>
                  <li><NavLink href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true" /></NavLink></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="separator sm-margin-top-70px xs-margin-top-40px" />
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="copy-right-text dark" ><p><NavLink to='/'>&copy; All Right Reserved by Biolife </NavLink></p></div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="payment-methods">
              <ul>
                <li><NavLink href="#" className="payment-link"><img src="assets/images/card1.jpg" width={51} height={36} alt /></NavLink></li>
                <li><NavLink href="#" className="payment-link"><img src="assets/images/card2.jpg" width={51} height={36} alt /></NavLink></li>
                <li><NavLink href="#" className="payment-link"><img src="assets/images/card3.jpg" width={51} height={36} alt /></NavLink></li>
                <li><NavLink href="#" className="payment-link"><img src="assets/images/card4.jpg" width={51} height={36} alt /></NavLink></li>
                <li><NavLink href="#" className="payment-link"><img src="assets/images/card5.jpg" width={51} height={36} alt /></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*Footer For Mobile*/}
  <div className="mobile-footer">
    <div className="mobile-footer-inner">
      <div className="mobile-block block-menu-main">
        <NavLink className="menu-bar menu-toggle btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
          <span className="fa fa-bars" />
          <span className="text">Menu</span>
        </NavLink>
      </div>
      <div className="mobile-block block-sidebar">
        <NavLink className="menu-bar filter-toggle btn-toggle" data-object="open-mobile-filter" href="javascript:void(0)">
          <i className="fa fa-sliders" aria-hidden="true" />
          <span className="text">Sidebar</span>
        </NavLink>
      </div>
      <div className="mobile-block block-minicart">
        <NavLink className="link-to-cart" href="#">
          <span className="fa fa-shopping-bag" aria-hidden="true" />
          <span className="text">Cart</span>
        </NavLink>
      </div>
      <div className="mobile-block block-global">
        <NavLink className="menu-bar myaccount-toggle btn-toggle" data-object="global-panel-opened" href="javascript:void(0)">
          <span className="fa fa-globe" />
          <span className="text">Global</span>
        </NavLink>
      </div>
    </div>
  </div>
  {/*Mobile Global Menu*/}
  <div className="mobile-block-global">
    <div className="biolife-mobile-panels">
      <span className="biolife-current-panel-title">Global</span>
      <NavLink className="biolife-close-btn" data-object="global-panel-opened" href="#">×</NavLink>
    </div>
    <div className="block-global-contain">
      <div className="glb-item my-account">
        <b className="title">My Account</b>
        <ul className="list">
          <li className="list-item"><NavLink href="#">Login/register</NavLink></li>
          <li className="list-item"><NavLink href="#">Wishlist <span className="index">(8)</span></NavLink></li>
          <li className="list-item"><NavLink href="#">Checkout</NavLink></li>
        </ul>
      </div>
      <div className="glb-item currency">
        <b className="title">Currency</b>
        <ul className="list">
          <li className="list-item"><NavLink href="#">€ EUR (Euro)</NavLink></li>
          <li className="list-item"><NavLink href="#">$ USD (Dollar)</NavLink></li>
          <li className="list-item"><NavLink href="#">£ GBP (Pound)</NavLink></li>
          <li className="list-item"><NavLink href="#">¥ JPY (Yen)</NavLink></li>
        </ul>
      </div>
      <div className="glb-item languages">
        <b className="title">Language</b>
        <ul className="list inline">
          <li className="list-item"><NavLink href="#"><img src="assets/images/languages/us.jpg" alt="flag" width={24} height={18} /></NavLink></li>
          <li className="list-item"><NavLink href="#"><img src="assets/images/languages/fr.jpg" alt="flag" width={24} height={18} /></NavLink></li>
          <li className="list-item"><NavLink href="#"><img src="assets/images/languages/ger.jpg" alt="flag" width={24} height={18} /></NavLink></li>
          <li className="list-item"><NavLink href="#"><img src="assets/images/languages/jap.jpg" alt="flag" width={24} height={18} /></NavLink></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="biolife-quickview-block" className="biolife-quickview-block">
  <div className="quickview-container">
    <NavLink href="#" className="btn-close-quickview" data-object="open-quickview-block"><span className="biolife-icon icon-close-menu" /></NavLink>
    <div className="biolife-quickview-inner">
      <div className="media">
        <ul className="biolife-carousel quickview-for" data-slick="{&quot;arrows&quot;:false,&quot;dots&quot;:false,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:1,&quot;slidesToScroll&quot;:1,&quot;fade&quot;:true,&quot;asNavFor&quot;:&quot;.quickview-nav&quot;}">
          <li><img src="assets/images/details-product/detail_01.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_02.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_03.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_04.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_05.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_06.jpg" alt width={500} height={500} /></li>
          <li><img src="assets/images/details-product/detail_07.jpg" alt width={500} height={500} /></li>
        </ul>
        <ul className="biolife-carousel quickview-nav" data-slick="{&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;centerMode&quot;:false,&quot;focusOnSelect&quot;:true,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:3,&quot;slidesToScroll&quot;:1,&quot;asNavFor&quot;:&quot;.quickview-for&quot;}">
          <li><img src="assets/images/details-product/thumb_01.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_02.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_03.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_04.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_05.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_06.jpg" alt width={88} height={88} /></li>
          <li><img src="assets/images/details-product/thumb_07.jpg" alt width={88} height={88} /></li>
        </ul>
      </div>
      <div className="product-attribute">
        <h4 className="title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
        <div className="rating">
          <p className="star-rating"><span className="width-80percent" /></p>
        </div>
        <div className="price price-contain">
          <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
          <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
        </div>
        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.</p>
        <div className="from-cart">
          <div className="qty-input">
            <input type="text" name="qty12554" defaultValue={1} data-max_value={20} data-min_value={1} data-step={1} />
            <NavLink href="#" className="qty-btn btn-up"><i className="fa fa-caret-up" aria-hidden="true" /></NavLink>
            <NavLink href="#" className="qty-btn btn-down"><i className="fa fa-caret-down" aria-hidden="true" /></NavLink>
          </div>
          <div className="buttons">
            <NavLink href="#" className="btn add-to-cart-btn btn-bold">add to cart</NavLink>
          </div>
        </div>
        <div className="product-meta">
          <div className="product-atts">
            <div className="product-atts-item">
              <b className="meta-title">Categories:</b>
              <ul className="meta-list">
                <li><NavLink href="#" className="meta-link">Milk &amp; Cream</NavLink></li>
                <li><NavLink href="#" className="meta-link">Fresh Meat</NavLink></li>
                <li><NavLink href="#" className="meta-link">Fresh Fruit</NavLink></li>
              </ul>
            </div>
            <div className="product-atts-item">
              <b className="meta-title">Tags:</b>
              <ul className="meta-list">
                <li><NavLink href="#" className="meta-link">food theme</NavLink></li>
                <li><NavLink href="#" className="meta-link">organic food</NavLink></li>
                <li><NavLink href="#" className="meta-link">organic theme</NavLink></li>
              </ul>
            </div>
            <div className="product-atts-item">
              <b className="meta-title">Brand:</b>
              <ul className="meta-list">
                <li><NavLink href="#" className="meta-link">Fresh Fruit</NavLink></li>
              </ul>
            </div>
          </div>
          <span className="sku">SKU: N/A</span>
          <div className="biolife-social inline add-title">
            <span className="fr-title">Share:</span>
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
    </div>
  </div>
</div>


    </>
  )
}

export default Footer
