import React from 'react'
import Layout from '../../components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const HomePage = () => {

  const [auth, setAuth] = useAuth()

  return (
    <Layout>
      <>
      <div className="page-contain">
  {/* Main content */}
  <div id="main-content" className="main-content">
    {/*Block 01: Main slide*/}
    <div className="main-slide block-slider">
      <ul className="biolife-carousel nav-none-on-mobile" data-slick="{&quot;arrows&quot;: true, &quot;dots&quot;: false, &quot;slidesMargin&quot;: 0, &quot;slidesToShow&quot;: 1, &quot;infinite&quot;: true, &quot;speed&quot;: 800}">
        <li>
          <div className="slide-contain slider-opt03__layout01">
            <div className="media">
              <div className="child-elememt">
                <NavLink href="#" className="link-to">
                  <img src="assets/images/home-03/slide-01-child-01.png" width={604} height={580} alt />
                </NavLink>
              </div>
            </div>
            <div className="text-content">
              <i className="first-line">Pomegranate</i>
              <h3 className="second-line">Vegetables 100% Organic</h3>
              <p className="third-line">A blend of freshly squeezed green apple &amp; fruits</p>
              <p className="buttons">
                <NavLink href="#" className="btn btn-bold">Shop now</NavLink>
                <NavLink href="#" className="btn btn-thin">View lookbook</NavLink>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="slide-contain slider-opt03__layout01">
            <div className="media">
              <div className="child-elememt"><NavLink href="#" className="link-to"><img src="assets/images/home-03/slide-01-child-01.png" width={604} height={580} alt /></NavLink></div>
            </div>
            <div className="text-content">
              <i className="first-line">Pomegranate</i>
              <h3 className="second-line">Vegetables 100% Organic</h3>
              <p className="third-line">A blend of freshly squeezed green apple &amp; fruits</p>
              <p className="buttons">
                <NavLink href="#" className="btn btn-bold">Shop now</NavLink>
                <NavLink href="#" className="btn btn-thin">View lookbook</NavLink>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    {/*Block 02: Banner*/}
    <div className="special-slide">
      <div className="container">
        <ul className="biolife-carousel dots_ring_style" data-slick="{&quot;arrows&quot;: false, &quot;dots&quot;: true, &quot;slidesMargin&quot;: 30, &quot;slidesToShow&quot;: 1, &quot;infinite&quot;: true, &quot;speed&quot;: 800, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 1}},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:20, &quot;dots&quot;: false}},{&quot;breakpoint&quot;:480, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 1}}]}">
          <li>
            <div className="slide-contain biolife-banner__special">
              <div className="banner-contain">
                <div className="media">
                  <NavLink href="#" className="bn-link">
                    <figure><img src="assets/images/home-03/bn_special_org.jpg" width={616} height={483} alt /></figure>
                  </NavLink>
                </div>
                <div className="text-content">
                  <b className="first-line">Pomegranate</b>
                  <span className="second-line">Organic Heaven Made</span>
                  <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                  <div className="product-detail">
                    <h4 className="product-name">National Fresh Fruit Production</h4>
                    <div className="price price-contain">
                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                    </div>
                    <div className="buttons">
                      <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide-contain biolife-banner__special">
              <div className="banner-contain">
                <div className="media">
                  <NavLink href="#" className="bn-link">
                    <figure><img src="assets/images/home-03/bn_special_org.jpg" width={616} height={483} alt /></figure>
                  </NavLink>
                </div>
                <div className="text-content">
                  <b className="first-line">Pomegranate</b>
                  <span className="second-line">Organic Heaven Made</span>
                  <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                  <div className="product-detail">
                    <h4 className="product-name">National Fresh Fruit Production</h4>
                    <div className="price price-contain">
                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                    </div>
                    <div className="buttons">
                      <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide-contain biolife-banner__special">
              <div className="banner-contain">
                <div className="media">
                  <NavLink href="#" className="bn-link">
                    <figure><img src="assets/images/home-03/bn_special_org.jpg" width={616} height={483} alt /></figure>
                  </NavLink>
                </div>
                <div className="text-content">
                  <b className="first-line">Pomegranate</b>
                  <span className="second-line">Organic Heaven Made</span>
                  <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                  <div className="product-detail">
                    <h4 className="product-name">National Fresh Fruit Production</h4>
                    <div className="price price-contain">
                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                    </div>
                    <div className="buttons">
                      <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide-contain biolife-banner__special">
              <div className="banner-contain">
                <div className="media">
                  <NavLink href="#" className="bn-link">
                    <figure><img src="assets/images/home-03/bn_special_org.jpg" width={616} height={483} alt /></figure>
                  </NavLink>
                </div>
                <div className="text-content">
                  <b className="first-line">Pomegranate</b>
                  <span className="second-line">Organic Heaven Made</span>
                  <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                  <div className="product-detail">
                    <h4 className="product-name">National Fresh Fruit Production</h4>
                    <div className="price price-contain">
                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                    </div>
                    <div className="buttons">
                      <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
          <b className="txt-show-01">100%Nature</b>
          <i className="txt-show-02">Fresh Fruits</i>
          <ul className="services-list">
            <li>
              <div className="service-inner">
                <span className="number">1</span>
                <span className="biolife-icon icon-beer" />
                <NavLink className="srv-name" href="#">full stamped product</NavLink>
              </div>
            </li>
            <li>
              <div className="service-inner">
                <span className="number">2</span>
                <span className="biolife-icon icon-schedule" />
                <NavLink className="srv-name" href="#">place and delivery on time</NavLink>
              </div>
            </li>
            <li>
              <div className="service-inner">
                <span className="number">3</span>
                <span className="biolife-icon icon-car" />
                <NavLink className="srv-name" href="#">Free shipping in the city</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/*Block 03: Product Tab*/}
    <div className="product-tab z-index-20 sm-margin-top-193px xs-margin-top-30px">
      <div className="container">
        <div className="biolife-title-box">
          <span className="subtitle">All the best item for You</span>
          <h3 className="main-title">Related Products</h3>
        </div>
        <div className="biolife-tab biolife-tab-contain sm-margin-top-34px">
          <div className="tab-head tab-head__icon-top-layout icon-top-layout">
            <ul className="tabs md-margin-bottom-35-im xs-margin-bottom-40-im">
              <li className="tab-element active">
                <NavLink href="#tab01_1st" className="tab-link"><span className="biolife-icon icon-lemon" />Oranges</NavLink>
              </li>
              <li className="tab-element">
                <NavLink href="#tab01_2nd" className="tab-link"><span className="biolife-icon icon-grape2" />Grapes</NavLink>
              </li>
              <li className="tab-element">
                <NavLink href="#tab01_3rd" className="tab-link"><span className="biolife-icon icon-blueberry" />Blueberries</NavLink>
              </li>
              <li className="tab-element">
                <NavLink href="#tab01_4th" className="tab-link"><span className="biolife-icon icon-orange" />Lemon</NavLink>
              </li>
              <li className="tab-element">
                <NavLink href="#tab01_5th" className="tab-link"><span className="biolife-icon icon-broccoli" />Vegetables</NavLink>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div id="tab01_1st" className="tab-contain active">
              <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick="{&quot;rows&quot;:2 ,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:true,&quot;speed&quot;:400,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3, &quot;slidesMargin&quot;:25 }},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:15}}]}">
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado, Large</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-07.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">13 Healing Powers of Lemons</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers Magnetic Salt</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower Kugel</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-18.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="tab01_2nd" className="tab-contain ">
              <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick="{&quot;rows&quot;:2 ,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:true,&quot;speed&quot;:400,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3, &quot;slidesMargin&quot;:25 }},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:15}}]}">
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado, Large</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-07.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">13 Healing Powers of Lemons</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers Magnetic Salt</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower Kugel</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-18.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="tab01_3rd" className="tab-contain ">
              <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick="{&quot;rows&quot;:2 ,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:true,&quot;speed&quot;:400,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3, &quot;slidesMargin&quot;:25 }},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:15}}]}">
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado, Large</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers Magnetic Salt</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-07.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">13 Healing Powers of Lemons</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-18.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower Kugel</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="tab01_4th" className="tab-contain ">
              <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick="{&quot;rows&quot;:2 ,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:true,&quot;speed&quot;:400,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3, &quot;slidesMargin&quot;:25 }},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:15}}]}">
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado, Large</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-07.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">13 Healing Powers of Lemons</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers Magnetic Salt</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower Kugel</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-18.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="tab01_5th" className="tab-contain ">
              <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick="{&quot;rows&quot;:2 ,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:true,&quot;speed&quot;:400,&quot;slidesMargin&quot;:10,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3, &quot;slidesMargin&quot;:25 }},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:15}}]}">
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado, Large</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers Magnetic Salt</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-07.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">13 Healing Powers of Lemons</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower Kugel</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-18.jpg" alt="Vegetables" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                      <NavLink className="lookup btn_call_quickview" href="#"><i className="biolife-icon icon-search" /></NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true" />add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Block 04: Banner Promotion 01 */}
    <div className="banner-promotion-01 xs-margin-top-50px sm-margin-top-11px">
      <div className="biolife-banner promotion biolife-banner__promotion">
        <div className="banner-contain">
          <div className="media background-biolife-banner__promotion">
            <div className="img-moving position-1">
              <img src="assets/images/home-03/img-moving-pst-1.png" width={149} height={139} alt="img msv" />
            </div>
            <div className="img-moving position-2">
              <img src="assets/images/home-03/img-moving-pst-2.png" width={185} height={265} alt="img msv" />
            </div>
            <div className="img-moving position-3">
              <img src="assets/images/home-03/img-moving-pst-3-cut.png" width={384} height={151} alt="img msv" />
            </div>
            <div className="img-moving position-4">
              <img src="assets/images/home-03/img-moving-pst-4.png" width={198} height={269} alt="img msv" />
            </div>
          </div>
          <div className="text-content">
            <div className="container text-wrap">
              <i className="first-line">Healthy Fruit juice</i>
              <span className="second-line">Vegetable Always fresh</span>
              <p className="third-line">Food Heaven Made Easy sounds like the name of an amazingly delicious food delivery service, but don't be fooled...</p>
              <div className="product-detail">
                <p className="txt-price"><span>Only:</span>$8.00</p>
                <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Block 05: Banner Promotion 02*/}
    <div className="banner-promotion-02 z-index-20">
      <div className="biolife-banner promotion2 biolife-banner__promotion2">
        <div className="banner-contain">
          <div className="container">
            <div className="media" />
            <div className="text-content">
              <b className="first-line">Food Heaven Made</b>
              <span className="second-line">Easy <i>Healthy, Happy Life</i></span>
              <p className="third-line">Food Heaven Made Easy sounds like the name of an amazingly delicious food delivery service, but don't be fooled. The blog is actually NavLink compilation of recipes, cooking videos, and nutrition tips.</p>
              <p className="buttons">
                <NavLink href="#" className="btn btn-bold">Read More</NavLink>
                <NavLink href="#" className="btn btn-thin">View Menu Now</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Block 06: Products*/}
    <div className="Product-box sm-margin-top-96px xs-margin-top-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6">
            <div className="advance-product-box">
              <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                <h3 className="title">Deals of the day</h3>
              </div>
              <ul className="products biolife-carousel nav-top-right nav-none-on-mobile" data-slick="{&quot;arrows&quot;:true, &quot;dots&quot;:false, &quot;infinite&quot;:false, &quot;speed&quot;:400, &quot;slidesMargin&quot;:30, &quot;slidesToShow&quot;:1}">
                <li className="product-item">
                  <div className="contain-product deal-layout contain-product__deal-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/home-03/product_deal_330x330.jpg" alt="dd" width={330} height={330} className="product-thumnail" />
                      </NavLink>
                      <div className="labels">
                        <span className="sale-label">-50%</span>
                      </div>
                    </div>
                    <div className="info">
                      <div className="biolife-countdown" data-datetime="2020/02/18 00:00:00" />
                      <b className="categories">Fresh Fruit</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product deal-layout contain-product__deal-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/home-03/product_deal-02_330x330.jpg" alt="dd" width={330} height={330} className="product-thumnail" />
                      </NavLink>
                      <div className="labels">
                        <span className="sale-label">-50%</span>
                      </div>
                    </div>
                    <div className="info">
                      <div className="biolife-countdown" data-datetime="2020/04/18 00:00:00" />
                      <b className="categories">Fresh Fruit</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product deal-layout contain-product__deal-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/home-03/product_deal-03_330x330.jpg" alt="dd" width={330} height={330} className="product-thumnail" />
                      </NavLink>
                      <div className="labels">
                        <span className="sale-label">-50%</span>
                      </div>
                    </div>
                    <div className="info">
                      <div className="biolife-countdown" data-datetime="2020/01/18 00:00:00" />
                      <b className="categories">Fresh Fruit</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="slide-down-box">
                        <p className="message">All products are carefully selected to ensure food safety.</p>
                        <div className="buttons">
                          <NavLink href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true" /></NavLink>
                          <NavLink href="#" className="btn add-to-cart-btn">add to cart</NavLink>
                          <NavLink href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true" /></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-6">
            <div className="advance-product-box">
              <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                <h3 className="title">Top Rated Products</h3>
              </div>
              <ul className="products biolife-carousel eq-height-contain nav-center-03 nav-none-on-mobile row-space-29px" data-slick="{&quot;rows&quot;:2,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:400,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:2,&quot;responsive&quot;:[{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{ &quot;rows&quot;:2, &quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;rows&quot;:2, &quot;slidesToShow&quot;: 1}},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;rows&quot;:2, &quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:500, &quot;settings&quot;:{ &quot;rows&quot;:2, &quot;slidesToShow&quot;: 1}}]}">
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-19.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Pumpkins Fairytale</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-03.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Passover Cauliflower</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-02.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Hot Chili Peppers</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-22.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Cherry Tomato Seeds</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-05.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Organic Hass Avocado</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-06.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">Packham's Pears</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product right-info-layout contain-product__right-info-layout">
                    <div className="product-thumb">
                      <NavLink href="#" className="link-to-product">
                        <img src="assets/images/products/p-20.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                      </NavLink>
                    </div>
                    <div className="info">
                      <b className="categories">Vegetables</b>
                      <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                      <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                      </div>
                      <div className="rating">
                        <p className="star-rating"><span className="width-80percent" /></p>
                        <span className="review-count">(05 Reviews)</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="biolife-banner style-01 biolife-banner__style-01 xs-margin-top-80px-im sm-margin-top-30px-im">
                <div className="banner-contain">
                  <NavLink href="#" className="bn-link" />
                  <div className="text-content">
                    <span className="first-line">Daily Fresh</span>
                    <b className="second-line">Natural</b>
                    <i className="third-line">Fresh Food</i>
                    <span className="fourth-line">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Block 07: Brands*/}
    <div className="brand-slide sm-margin-top-100px background-fafafa xs-margin-top-80px xs-margin-bottom-80px">
      <div className="container">
        <ul className="biolife-carousel nav-center-bold nav-none-on-mobile" data-slick="{&quot;rows&quot;:1,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:400,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:4, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 4}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3}},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2, &quot;slidesMargin&quot;:10}},{&quot;breakpoint&quot;:450, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 1, &quot;slidesMargin&quot;:10}}]}">
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-01.jpg" width={214} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-02.jpg" width={214} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-03.jpg" width={153} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-04.jpg" width={224} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-01.jpg" width={214} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-02.jpg" width={214} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-03.jpg" width={153} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="biolife-brd-container">
              <NavLink href="#" className="link">
                <figure><img src="assets/images/home-03/brd-04.jpg" width={224} height={163} alt /></figure>
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/*Block 08: Blog Posts*/}
    <div className="blog-posts sm-margin-top-93px sm-padding-top-72px xs-padding-bottom-50px">
      <div className="container">
        <div className="biolife-title-box">
          <span className="subtitle">The freshest and most exciting news</span>
          <h3 className="main-title">From the Blog</h3>
        </div>
        <ul className="biolife-carousel nav-center nav-none-on-mobile xs-margin-top-36px" data-slick="{&quot;rows&quot;:1,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:400,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:3, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 3}},{&quot;breakpoint&quot;:992, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:768, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:600, &quot;settings&quot;:{ &quot;slidesToShow&quot;: 1}}]}">
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02 ">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-01.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-02.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-04.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-03.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-05.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="post-item effect-01 style-bottom-info layout-02">
              <div className="thumbnail">
                <NavLink href="#" className="link-to-post"><img src="assets/images/our-blog/post-thumb-06.jpg" width={370} height={270} alt="" /></NavLink>
                <div className="post-date">
                  <span className="date">26</span>
                  <span className="month">dec</span>
                </div>
              </div>
              <div className="post-content">
                <h4 className="post-name"><NavLink href="#" className="linktopost">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                <div className="post-meta">
                  <NavLink href="#" className="post-meta__item author"><img src="assets/images/home-03/post-author.png" width={28} height={28} alt="" /><span>Admin</span></NavLink>
                  <NavLink href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment" /></NavLink>
                  <NavLink href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like" /></NavLink>
                  <div className="post-meta__item post-meta__item-social-box">
                    <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true" /></span>
                    <div className="inner-content">
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
                <p className="excerpt">Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...</p>
                <div className="group-buttons">
                  <NavLink href="#" className="btn readmore">continue reading</NavLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

      </>
    </Layout>
  )
}

export default HomePage
