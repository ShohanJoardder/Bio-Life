import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import { toast } from 'react-hot-toast'

const Header = () => {
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const handleLogout = () =>{
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem('auth')
    toast.success("Logout successful")
    navigate("/login")
  }
  return (
    <>
      <header id="header" className="header-area style-01 layout-03">
  <div className="header-top bg-main hidden-xs">
    <div className="container">
      <div className="top-bar left">
        <ul className="horizontal-menu">
          <li><NavLink href="#"><i className="fa fa-envelope" aria-hidden="true" />Organic@company.com</NavLink></li>
          <li><NavLink href="#">Free Shipping for all Order of $99</NavLink></li>
        </ul>
      </div>
      <div className="top-bar right">
        <ul className="social-list">
          <li><NavLink to=""><i className="fa fa-twitter" aria-hidden="true" /></NavLink></li>
          <li><NavLink to="#"><i className="fa fa-facebook" aria-hidden="true" /></NavLink></li>
          <li><NavLink to="#"><i className="fa fa-pinterest" aria-hidden="true" /></NavLink></li>
        </ul>
        <ul className="horizontal-menu">
          <li className="horz-menu-item currency">
          <li><NavLink className="login-link"><i className="fa fa-currency" />$ Doller (USD)</NavLink></li>
          </li>
          <li className="horz-menu-item lang">
            <li><NavLink className="login-link"><i class="fa fa-language"></i> English (US)</NavLink></li>
          </li>
          {
            !auth.user ? (<>
              <li><NavLink to="login"><i className="biolife-icon icon-login" /> Login/Register</NavLink></li>
            </>) : (<>
                <li className="dropdown">
                <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="biolife-icon icon-login" /> {auth?.user?.name}<span className="caret" /></NavLink>
                <ul className="dropdown-menu" style={{"color": "#000 !important"}}>
                  <li><NavLink
                   to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} 
                   style={{"color": "#000"}}
                   >Dashboard</NavLink></li>
                  <li><NavLink onClick={handleLogout} to="/login" style={{"color": "#000"}}>Logout</NavLink></li>
                </ul>
              </li>
            </>)
          }
        </ul>
      </div>
    </div>
  </div>
  <div className="header-middle biolife-sticky-object ">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
          <NavLink href="index-2.html" className="biolife-logo"><img src="assets/images/organic-3.png" alt="biolife logo" width={135} height={34} /></NavLink>
        </div>
        <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
          <div className="primary-menu">
            <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
              <li className="menu-item"><NavLink to="/">Home</NavLink></li>
              <li className="menu-item menu-item-has-children has-megamenu">
                <NavLink href="#" className="menu-name" data-title="Shop">Shop</NavLink>
                <div className="wrap-megamenu lg-width-900 md-width-750">
                  <div className="mega-content">
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Fresh Berries</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Fruit &amp; Nut Gifts</NavLink></li>
                          <li><NavLink href="#">Mixed Fruits</NavLink></li>
                          <li><NavLink href="#">Oranges</NavLink></li>
                          <li><NavLink href="#">Bananas &amp; Plantains</NavLink></li>
                          <li><NavLink href="#">Fresh Gala Apples</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Vegetables</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Berries</NavLink></li>
                          <li><NavLink href="#">Pears</NavLink></li>
                          <li><NavLink href="#">Chili Peppers</NavLink></li>
                          <li><NavLink href="#">Fresh Avocado</NavLink></li>
                          <li><NavLink href="#">Grapes</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu ">
                        <h4 className="menu-title">Fresh Fruits</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Basket of apples</NavLink></li>
                          <li><NavLink href="#">Strawberry</NavLink></li>
                          <li><NavLink href="#">Blueberry</NavLink></li>
                          <li><NavLink href="#">Orange</NavLink></li>
                          <li><NavLink href="#">Pineapple</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Featured Products</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Coffee Creamers</NavLink></li>
                          <li><NavLink href="#">Mayonnaise</NavLink></li>
                          <li><NavLink href="#">Almond Milk</NavLink></li>
                          <li><NavLink href="#">Fruit Jam</NavLink></li>
                          <li><NavLink href="#">Beverages</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-has-children has-child">
                <NavLink href="#" className="menu-name" data-title="Products">Products</NavLink>
                <ul className="sub-menu">
                  <li className="menu-item"><NavLink href="#">Omelettes</NavLink></li>
                  <li className="menu-item"><NavLink href="#">Breakfast Scrambles</NavLink></li>
                  <li className="menu-item menu-item-has-children has-child"><NavLink href="#" className="menu-name" data-title="Eggs & other considerations">Eggs &amp; other considerations</NavLink>
                    <ul className="sub-menu">
                      <li className="menu-item"><NavLink href="#">Classic Breakfast</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Huevos Rancheros</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Everything Egg Sandwich</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Egg Sandwich</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Vegan Burrito</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Biscuits and Gravy</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Bacon Avo Egg Sandwich</NavLink></li>
                    </ul>
                  </li>
                  <li className="menu-item"><NavLink href="#">Griddle</NavLink></li>
                  <li className="menu-item menu-item-has-children has-child"><NavLink href="#" className="menu-name" data-title="Sides & Extras">Sides &amp; Extras</NavLink>
                    <ul className="sub-menu">
                      <li className="menu-item"><NavLink href="#">Breakfast Burrito</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Crab Cake Benedict</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Corned Beef Hash</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Steak &amp; Eggs</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Oatmeal</NavLink></li>
                      <li className="menu-item"><NavLink href="#">Fruit &amp; Yogurt Parfait</NavLink></li>
                    </ul>
                  </li>
                  <li className="menu-item"><NavLink href="#">Biscuits</NavLink></li>
                  <li className="menu-item"><NavLink href="#">Seasonal Fruit Plate</NavLink></li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children has-megamenu">
                <NavLink href="#" className="menu-name" data-title="Demo">Pages</NavLink>
                <div className="wrap-megamenu lg-width-800 md-width-750">
                  <div className="mega-content">
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Inner Pages</h4>
                        <ul className="menu">
                          <li className="menu-item"><NavLink className="menu-name" href="blog-post.html">Blog Single</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="blog-v01.html">Blog Style 01</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="blog-v02.html">Blog Style 02</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="blog-v03.html">Blog Style 03</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="contact.html">Contact Us</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="about-us.html">About Us</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="checkout.html">Checkout</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="shopping-cart.html">Shopping Cart</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="login.html">Login/Register</NavLink></li>
                          <li className="menu-item"><NavLink className="menu-name" href="404.html">404</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Category Pages</h4>
                        <ul className="menu">
                          <li><NavLink href="category-grid-3-cols.html">Grid 3 Cols</NavLink></li>
                          <li><NavLink href="category-grid.html">Grid 4 Cols</NavLink></li>
                          <li><NavLink href="category-grid-6-cols.html">Grid 6 Cols</NavLink></li>
                          <li><NavLink href="category-grid-left-sidebar.html">Grid Left Sidebar</NavLink></li>
                          <li><NavLink href="category-grid-right-sidebar.html">Grid Right Sidebar</NavLink></li>
                          <li><NavLink href="category-list.html">List Full</NavLink></li>
                          <li><NavLink href="category-list-left-sidebar.html">List Left Sidebar</NavLink></li>
                          <li><NavLink href="category-list-right-sidebar.html">List Right Sidebar</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Product Types</h4>
                        <ul className="menu">
                          <li><NavLink href="single-product-simple.html">Simple</NavLink></li>
                          <li><NavLink href="single-product-grouped.html">Grouped</NavLink></li>
                          <li><NavLink href="single-product.html">Variable</NavLink></li>
                          <li><NavLink href="single-product-external.html">External/Affiliate</NavLink></li>
                          <li><NavLink href="single-product-onsale.html">Countdown</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item menu-item-has-children has-megamenu">
                <NavLink href="#" className="menu-name" data-title="Blog">Blog</NavLink>
                <div className="wrap-megamenu lg-width-800 md-width-750">
                  <div className="mega-content">
                    <div className="col-lg-3 col-md-3 col-xs-6">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Blog Categories</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Beauty (30)</NavLink></li>
                          <li><NavLink href="#">Fashion (50)</NavLink></li>
                          <li><NavLink href="#">Food (10)</NavLink></li>
                          <li><NavLink href="#">Life Style (60)</NavLink></li>
                          <li><NavLink href="#">Travel (10)</NavLink></li>
                          <li><NavLink href="#">Nutrition (35)</NavLink></li>
                          <li><NavLink href="#">Food Decoration (45)</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-xs-6">
                      <div className="wrap-custom-menu vertical-menu">
                        <h4 className="menu-title">Featured Posts</h4>
                        <ul className="menu">
                          <li><NavLink href="#">Post example<sup>#1</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#2</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#3</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#4</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#5</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#6</sup></NavLink></li>
                          <li><NavLink href="#">Post example<sup>#7</sup></NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px">
                      <div className="block-posts">
                        <h4 className="menu-title">Recent Posts</h4>
                        <ul className="posts">
                          <li>
                            <div className="block-post-item">
                              <div className="thumb"><NavLink href="#"><img src="assets/images/megamenu/thumb-05.jpg" width={100} height={73} alt /></NavLink></div>
                              <div className="left-info">
                                <h4 className="post-name"><NavLink href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                                <span className="p-date">Jan 05, 2019</span>
                                <span className="p-comment">2 Comments</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="block-post-item">
                              <div className="thumb"><NavLink href="#"><img src="assets/images/megamenu/thumb-06.jpg" width={100} height={73} alt /></NavLink></div>
                              <div className="left-info">
                                <h4 className="post-name"><NavLink href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                                <span className="p-date">May 15, 2019</span>
                                <span className="p-comment">8 Comments</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="block-post-item">
                              <div className="thumb"><NavLink href="#"><img src="assets/images/megamenu/thumb-07.jpg" width={100} height={73} alt /></NavLink></div>
                              <div className="left-info">
                                <h4 className="post-name"><NavLink href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</NavLink></h4>
                                <span className="p-date">Apr 26, 2019</span>
                                <span className="p-comment">10 Comments</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="menu-item"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
          <div className="biolife-cart-info">
            <div className="mobile-search">
              <NavLink to="javascript:void(0)" className="open-searchbox"><i className="biolife-icon icon-search" /></NavLink>
              <div className="mobile-search-content">
                <form action="#" className="form-search" name="mobile-seacrh" method="get">
                  <NavLink href="#" className="btn-close"><span className="biolife-icon icon-close-menu" /></NavLink>
                  <input type="text" name="s" className="input-text" value="" defaultValue placeholder="Search here..." />
                  <select name="category">
                    <option value={-1} selected>All Categories</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fresh_berries">Fresh Berries</option>
                    <option value="ocean_foods">Ocean Foods</option>
                    <option value="butter_eggs">Butter &amp; Eggs</option>
                    <option value="fastfood">Fastfood</option>
                    <option value="fresh_meat">Fresh Meat</option>
                    <option value="fresh_onion">Fresh Onion</option>
                    <option value="papaya_crisps">Papaya &amp; Crisps</option>
                    <option value="oatmeal">Oatmeal</option>
                  </select>
                  <button type="submit" className="btn-submit">go</button>
                </form>
              </div>
            </div>
            <div className="wishlist-block hidden-sm hidden-xs">
              <NavLink href="#" className="link-to">
                <span className="icon-qty-combine">
                  <i className="icon-heart-bold biolife-icon" />
                  <span className="qty">4</span>
                </span>
              </NavLink>
            </div>
            <div className="minicart-block">
              <div className="minicart-contain">
                <NavLink href="javascript:void(0)" className="link-to">
                  <span className="icon-qty-combine">
                    <i className="icon-cart-mini biolife-icon" />
                    <span className="qty">8</span>
                  </span>
                  <span className="title">My Cart -</span>
                  <span className="sub-total">$0.00</span>
                </NavLink>
                <div className="cart-content">
                  <div className="cart-inner">
                    <ul className="products">
                      <li>
                        <div className="minicart-item">
                          <div className="thumb">
                            <NavLink href="#"><img src="assets/images/minicart/pr-01.jpg" width={90} height={90} alt="National Fresh" /></NavLink>
                          </div>
                          <div className="left-info">
                            <div className="product-title"><NavLink href="#" className="product-name">National Fresh Fruit</NavLink></div>
                            <div className="price">
                              <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                              <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                            </div>
                            <div className="qty">
                              <label htmlFor="cart[id123][qty]">Qty:</label>
                              <input type="number" className="input-qty" name="cart[id123][qty]" id="cart[id123][qty]" defaultValue={1} disabled />
                            </div>
                          </div>
                          <div className="action">
                            <NavLink href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true" /></NavLink>
                            <NavLink href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true" /></NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="minicart-item">
                          <div className="thumb">
                            <NavLink href="#"><img src="assets/images/minicart/pr-02.jpg" width={90} height={90} alt="National Fresh" /></NavLink>
                          </div>
                          <div className="left-info">
                            <div className="product-title"><NavLink href="#" className="product-name">National Fresh Fruit</NavLink></div>
                            <div className="price">
                              <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                              <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                            </div>
                            <div className="qty">
                              <label htmlFor="cart[id124][qty]">Qty:</label>
                              <input type="number" className="input-qty" name="cart[id124][qty]" id="cart[id124][qty]" defaultValue={1} disabled />
                            </div>
                          </div>
                          <div className="action">
                            <NavLink href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true" /></NavLink>
                            <NavLink href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true" /></NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="minicart-item">
                          <div className="thumb">
                            <NavLink href="#"><img src="assets/images/minicart/pr-03.jpg" width={90} height={90} alt="National Fresh" /></NavLink>
                          </div>
                          <div className="left-info">
                            <div className="product-title"><NavLink href="#" className="product-name">National Fresh Fruit</NavLink></div>
                            <div className="price">
                              <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                              <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                            </div>
                            <div className="qty">
                              <label htmlFor="cart[id125][qty]">Qty:</label>
                              <input type="number" className="input-qty" name="cart[id125][qty]" id="cart[id125][qty]" defaultValue={1} disabled />
                            </div>
                          </div>
                          <div className="action">
                            <NavLink href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true" /></NavLink>
                            <NavLink href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true" /></NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="minicart-item">
                          <div className="thumb">
                            <NavLink href="#"><img src="assets/images/minicart/pr-04.jpg" width={90} height={90} alt="National Fresh" /></NavLink>
                          </div>
                          <div className="left-info">
                            <div className="product-title"><NavLink href="#" className="product-name">National Fresh Fruit</NavLink></div>
                            <div className="price">
                              <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                              <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                            </div>
                            <div className="qty">
                              <label htmlFor="cart[id126][qty]">Qty:</label>
                              <input type="number" className="input-qty" name="cart[id126][qty]" id="cart[id126][qty]" defaultValue={1} disabled />
                            </div>
                          </div>
                          <div className="action">
                            <NavLink href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true" /></NavLink>
                            <NavLink href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true" /></NavLink>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="minicart-item">
                          <div className="thumb">
                            <NavLink href="#"><img src="assets/images/minicart/pr-05.jpg" width={90} height={90} alt="National Fresh" /></NavLink>
                          </div>
                          <div className="left-info">
                            <div className="product-title"><NavLink href="#" className="product-name">National Fresh Fruit</NavLink></div>
                            <div className="price">
                              <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                              <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                            </div>
                            <div className="qty">
                              <label htmlFor="cart[id127][qty]">Qty:</label>
                              <input type="number" className="input-qty" name="cart[id127][qty]" id="cart[id127][qty]" defaultValue={1} disabled />
                            </div>
                          </div>
                          <div className="action">
                            <NavLink href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true" /></NavLink>
                            <NavLink href="#" className="remove"><i className="fa fa-trash-o" aria-hidden="true" /></NavLink>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <p className="btn-control">
                      <NavLink href="#" className="btn view-cart">view cart</NavLink>
                      <NavLink href="#" className="btn">checkout</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu-toggle">
              <NavLink className="btn-toggle" data-object="open-mobile-menu" to="javascript:void(0)">
                <span />
                <span />
                <span />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-bottom hidden-sm hidden-xs">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="vertical-menu vertical-category-block">
            <div className="block-title">
              <span className="menu-icon">
                <span className="line-1" />
                <span className="line-2" />
                <span className="line-3" />
              </span>
              <span className="menu-title">All Categories</span>
              <span className="angle" data-tgleclass="fa fa-caret-down"><i className="fa fa-caret-up" aria-hidden="true" /></span>
            </div>
            <div className="wrap-menu">
              <ul className="menu clone-main-menu">
                <li className="menu-item menu-item-has-children has-megamenu">
                  <NavLink href="#" className="menu-name" data-title="Fruit & Nut Gifts"><i className="biolife-icon icon-fruits" />Fruit &amp; Nut Gifts</NavLink>
                  <div className="wrap-megamenu lg-width-900 md-width-640">
                    <div className="mega-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Fresh Fuits</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Fruit &amp; Nut Gifts</NavLink></li>
                              <li><NavLink href="#">Mixed Fruits</NavLink></li>
                              <li><NavLink href="#">Oranges</NavLink></li>
                              <li><NavLink href="#">Bananas &amp; Plantains</NavLink></li>
                              <li><NavLink href="#">Fresh Gala Apples</NavLink></li>
                              <li><NavLink href="#">Berries</NavLink></li>
                              <li><NavLink href="#">Pears</NavLink></li>
                              <li><NavLink href="#">Produce</NavLink></li>
                              <li><NavLink href="#">Snack Foods</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Nut Gifts</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Non-Dairy Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Mayonnaise</NavLink></li>
                              <li><NavLink href="#">Almond Milk</NavLink></li>
                              <li><NavLink href="#">Ghee</NavLink></li>
                              <li><NavLink href="#">Beverages</NavLink></li>
                              <li><NavLink href="#">Ranch Salad Dressings</NavLink></li>
                              <li><NavLink href="#">Hemp Milk</NavLink></li>
                              <li><NavLink href="#">Nuts &amp; Seeds</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12 lg-padding-left-50 xs-margin-bottom-25 md-margin-bottom-0">
                          <div className="biolife-products-block max-width-270">
                            <h4 className="menu-title">Bestseller Products</h4>
                            <ul className="products-list default-product-style biolife-carousel nav-none-after-1k2 nav-center" data-slick="{&quot;rows&quot;:1,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;infinite&quot;:false,&quot;speed&quot;:400,&quot;slidesMargin&quot;:30,&quot;slidesToShow&quot;:1, &quot;responsive&quot;:[{&quot;breakpoint&quot;:767, &quot;settings&quot;:{ &quot;arrows&quot;: false}}]}">
                              <li className="product-item">
                                <div className="contain-product none-overlay">
                                  <div className="product-thumb">
                                    <NavLink href="#" className="link-to-product">
                                      <img src="assets/images/products/p-08.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                                    </NavLink>
                                  </div>
                                  <div className="info">
                                    <b className="categories">Fresh Fruit</b>
                                    <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                                    <div className="price">
                                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="contain-product none-overlay">
                                  <div className="product-thumb">
                                    <NavLink href="#" className="link-to-product">
                                      <img src="assets/images/products/p-11.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                                    </NavLink>
                                  </div>
                                  <div className="info">
                                    <b className="categories">Fresh Fruit</b>
                                    <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                                    <div className="price">
                                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="contain-product none-overlay">
                                  <div className="product-thumb">
                                    <NavLink href="#" className="link-to-product">
                                      <img src="assets/images/products/p-15.jpg" alt="dd" width={270} height={270} className="product-thumnail" />
                                    </NavLink>
                                  </div>
                                  <div className="info">
                                    <b className="categories">Fresh Fruit</b>
                                    <h4 className="product-title"><NavLink href="#" className="pr-name">National Fresh Fruit</NavLink></h4>
                                    <div className="price">
                                      <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                      <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 md-margin-top-9">
                          <div className="biolife-brand">
                            <ul className="brands">
                              <li><NavLink href="#"><img src="assets/images/megamenu/brand-organic.png" width={161} height={136} alt="organic" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/brand-explore.png" width={160} height={136} alt="explore" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/brand-organic-2.png" width={99} height={136} alt="organic 2" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/brand-eco-teas.png" width={164} height={136} alt="eco teas" /></NavLink></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children has-megamenu">
                  <NavLink href="#" className="menu-name" data-title="Vegetables"><i className="biolife-icon icon-broccoli-1" />Vegetables</NavLink>
                  <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-01">
                    <div className="mega-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Vegetables</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Fruit &amp; Nut Gifts</NavLink></li>
                              <li><NavLink href="#">Mixed Fruits</NavLink></li>
                              <li><NavLink href="#">Oranges</NavLink></li>
                              <li><NavLink href="#">Bananas &amp; Plantains</NavLink></li>
                              <li><NavLink href="#">Fresh Gala Apples</NavLink></li>
                              <li><NavLink href="#">Berries</NavLink></li>
                              <li><NavLink href="#">Pears</NavLink></li>
                              <li><NavLink href="#">Produce</NavLink></li>
                              <li><NavLink href="#">Snack Foods</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Gifts</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Non-Dairy Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Mayonnaise</NavLink></li>
                              <li><NavLink href="#">Almond Milk</NavLink></li>
                              <li><NavLink href="#">Ghee</NavLink></li>
                              <li><NavLink href="#">Beverages</NavLink></li>
                              <li><NavLink href="#">Ranch Salad Dressings</NavLink></li>
                              <li><NavLink href="#">Hemp Milk</NavLink></li>
                              <li><NavLink href="#">Nuts &amp; Seeds</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 lg-padding-left-57 md-margin-bottom-30">
                          <div className="biolife-brand vertical md-boder-left-30">
                            <h4 className="menu-title">Hot Brand</h4>
                            <ul className="brands">
                              <li><NavLink href="#"><img src="assets/images/megamenu/v-brand-organic.png" width={167} height={74} alt="organic" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/v-brand-explore.png" width={167} height={72} alt="explore" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/v-brand-organic-2.png" width={167} height={99} alt="organic 2" /></NavLink></li>
                              <li><NavLink href="#"><img src="assets/images/megamenu/v-brand-eco-teas.png" width={167} height={67} alt="eco teas" /></NavLink></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children has-megamenu">
                  <NavLink href="#" className="menu-name" data-title="Fresh Berries"><i className="biolife-icon icon-grape" />Fresh Berries</NavLink>
                  <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                    <div className="mega-content">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Fresh Berries</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Fruit &amp; Nut Gifts</NavLink></li>
                              <li><NavLink href="#">Mixed Fruits</NavLink></li>
                              <li><NavLink href="#">Oranges</NavLink></li>
                              <li><NavLink href="#">Bananas &amp; Plantains</NavLink></li>
                              <li><NavLink href="#">Fresh Gala Apples</NavLink></li>
                              <li><NavLink href="#">Berries</NavLink></li>
                              <li><NavLink href="#">Pears</NavLink></li>
                              <li><NavLink href="#">Produce</NavLink></li>
                              <li><NavLink href="#">Snack Foods</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 sm-col-12 lg-padding-left-23 xs-margin-bottom-36px md-margin-bottom-0">
                          <div className="wrap-custom-menu vertical-menu">
                            <h4 className="menu-title">Gifts</h4>
                            <ul className="menu">
                              <li><NavLink href="#">Non-Dairy Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Coffee Creamers</NavLink></li>
                              <li><NavLink href="#">Mayonnaise</NavLink></li>
                              <li><NavLink href="#">Almond Milk</NavLink></li>
                              <li><NavLink href="#">Ghee</NavLink></li>
                              <li><NavLink href="#">Beverages</NavLink></li>
                              <li><NavLink href="#">Ranch Salad Dressings</NavLink></li>
                              <li><NavLink href="#">Hemp Milk</NavLink></li>
                              <li><NavLink href="#">Nuts &amp; Seeds</NavLink></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 sm-col-12 lg-padding-left-25 md-padding-top-55">
                          <div className="biolife-banner layout-01">
                            <h3 className="top-title">Farm Fresh</h3>
                            <p className="content"> All the Lorem Ipsum generators on the Internet tend.</p>
                            <b className="bottomm-title">Berries Series</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item"><NavLink href="#" className="menu-name" data-title="Ocean Foods"><i className="biolife-icon icon-fish" />Ocean Foods</NavLink></li>
                <li className="menu-item menu-item-has-children has-child">
                  <NavLink href="#" className="menu-name" data-title="Butter & Eggs"><i className="biolife-icon icon-honey" />Butter &amp; Eggs</NavLink>
                  <ul className="sub-menu">
                    <li className="menu-item"><NavLink href="#">Omelettes</NavLink></li>
                    <li className="menu-item"><NavLink href="#">Breakfast Scrambles</NavLink></li>
                    <li className="menu-item menu-item-has-children has-child"><NavLink href="#" className="menu-name" data-title="Eggs & other considerations">Eggs &amp; other considerations</NavLink>
                      <ul className="sub-menu">
                        <li className="menu-item"><NavLink href="#">Classic Breakfast</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Huevos Rancheros</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Everything Egg Sandwich</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Egg Sandwich</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Vegan Burrito</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Biscuits and Gravy</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Bacon Avo Egg Sandwich</NavLink></li>
                      </ul>
                    </li>
                    <li className="menu-item"><NavLink href="#">Griddle</NavLink></li>
                    <li className="menu-item menu-item-has-children has-child"><NavLink href="#" className="menu-name" data-title="Sides & Extras">Sides &amp; Extras</NavLink>
                      <ul className="sub-menu">
                        <li className="menu-item"><NavLink href="#">Breakfast Burrito</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Crab Cake Benedict</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Corned Beef Hash</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Steak &amp; Eggs</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Oatmeal</NavLink></li>
                        <li className="menu-item"><NavLink href="#">Fruit &amp; Yogurt Parfait</NavLink></li>
                      </ul>
                    </li>
                    <li className="menu-item"><NavLink href="#">Biscuits</NavLink></li>
                    <li className="menu-item"><NavLink href="#">Seasonal Fruit Plate</NavLink></li>
                  </ul>
                </li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-fast-food" />Fastfood</NavLink></li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-beef" />Fresh Meat</NavLink></li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-onions" />Fresh Onion</NavLink></li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-avocado" />Papaya &amp; Crisps</NavLink></li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-contain" />Oatmeal</NavLink></li>
                <li className="menu-item"><NavLink href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice" />Fresh Bananas &amp; Plantains</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 padding-top-2px">
          <div className="header-search-bar layout-01">
            <form action="#" className="form-search" name="desktop-seacrh" method="get">
              <input type="text" name="s" className="input-text" value="" defaultValue placeholder="Search here..." />
              <button type="submit" className="btn-submit"><i className="biolife-icon icon-search" /></button>
            </form>
          </div>
          <div className="live-info">
            <p className="telephone"><i className="fa fa-phone" aria-hidden="true" /><b className="phone-number">(+900) 123 456 7891</b></p>
            <p className="working-time">Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
 
    </>
  )
}

export default Header
