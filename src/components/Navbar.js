import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Contact = styled('button')`
  color: grey;
`
const List = styled('li')`
  list-style-type: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
`

function Roziya(args) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const navigateNavbar = (props) => {
    navigate(props)
  }
  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">НОУ "Genesis Education"</NavbarBrand>
        <List onClick={() => navigateNavbar('/information')}>Information</List>
        <List onClick={() => navigateNavbar('/news_media')}>News&Media</List>
        {/* <List onClick={() => navigateNavbar('/movies')}>Movies</List>
        <List onClick={() => navigateNavbar('/tv')}>TV</List>
        <List onClick={() => navigateNavbar('/series')}>Series</List> */}
        <List onClick={() => navigateNavbar('/contactus')}>Contact Us</List>
        <NavbarToggler onClick={Roziya} />
      </Navbar>
    </div>
  )
}

export default Roziya
