import React from 'react'
import Layout from '../../components/Layout/Layout'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout>
      <>
    <div className="page-contain page-404">
  <div id="main-content" className="main-content">
    <div className="container">
      <div className="row">
        <div className="content-404">
          <h1 className="heading">404</h1>
          <h2 className="title">Oops! That page can't be found.</h2>
          <p>Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
          <NavLink className="button" to="/">Go to Home</NavLink>
        </div>
      </div>
    </div>
  </div>
</div>

      </>
    </Layout>
  )
}

export default PageNotFound
