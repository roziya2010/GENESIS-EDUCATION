import styled from 'styled-components'
import { Phone, Instagram, Send, MapPin, Map, Navigation2 } from 'react-feather'

const Footer = styled('div')`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  color: white;
  // background-image: url(https://media.istockphoto.com/id/1136322848/vector/vector-black-geometric-background-design-horizontal-geometrical-background-header-footer-in.jpg?s=612x612&w=0&k=20&c=jIWzOwuEXzFuWeeFp6nrBaabpMzD8Woa_u15D1WzDDI=);
  list-style: none;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1rem;
  background-color: #212529;
`
const Foooter = () => {
  return (
    <Footer>
      <div>
        <h4>About school</h4>
        <li>
          <MapPin />
          Located in Tashkent
        </li>
        <li>
          <Navigation2 />
          Index: 100025
        </li>
        <li>
          <Map />
          Opposite 48 school
        </li>
      </div>
      <div>
        <h4>Contact Us</h4>
        <li>
          <Phone />
          Phone number: +998 95 478 70 70
        </li>
        <li>
          <Instagram />
          Instagram: genesiseducation.uz
        </li>
        <li>
          <Send />
          Telegram: https://t.me/genesiseducation
        </li>
      </div>
      <div>
        <h4>Info</h4>
        <li>Name: Jakhongirova Roziya</li>
        <li>Phone number: +998 90 115 54 52</li>
        <li>Telegram: @Jakhongirova_roziya</li>
      </div>
    </Footer>
  )
}

export default Foooter
