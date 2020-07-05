import PropTypes from "prop-types"
import React from "react"
import Nav from "./Nav"

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
