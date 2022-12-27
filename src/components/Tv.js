import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Label,
  Input,
  FormGroup,
} from 'reactstrap'
import axios from 'axios'
import styled from 'styled-components'
const Container = styled(`div`)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 3rem;
`
const Cards = styled('div')`
transition: all 0.5s;

&:hover {
  transition: all 0.4s;
  transform: translateY(-20px);
}
`
const Search = styled('div')`
  display: flex;
`

function Tv() {
  const [data, setData] = useState(0)
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/10/recommendations?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=1'
      )
      .then((tvData) => setData(tvData))
  }, [])
  console.log(data?.data?.results)

  return (
    <Container>
      {data?.data?.results.map((d) => (
        <Cards
          style={{
            width: '18rem',
          }}
        >
          <img alt="Sample" src={`https://image.tmdb.org/t/p/w500${d.backdrop_path}`} />
          <CardBody>
            <CardTitle tag="h5">{d.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {d.first_air_date}
            </CardSubtitle>
            <CardText>{d.overview}</CardText>
          </CardBody>
        </Cards>
      ))}
    </Container>
  )
}
export default Tv
