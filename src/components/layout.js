import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import Nav from "./Nav"

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <main className="main">{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
