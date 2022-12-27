import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import axios from 'axios'
import styled from 'styled-components'

const Grid = styled(`div`)`
  width: 70%;
  transition: all 0.5s;

&:hover {
  transition: all 0.4s;
  transform: translateY(-20px);
}
`

const Container = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 3rem;
`
function Movies() {
  const [data, setData] = useState(0)
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=1'
      )
      .then((roziya) => setData(roziya))
  }, [])

  console.log(data?.data?.results)
  var Roziya = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Container>
      {data?.data?.results.map((d) => (
        <Grid>
          <img alt="Sample" src={`https://image.tmdb.org/t/p/w500${d.backdrop_path}`} />
          <CardBody>
            <CardTitle tag="h5">{d?.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {d.release_date}
            </CardSubtitle>
            <CardText>{d?.overview}</CardText>
          </CardBody>
        </Grid>
      ))}
    </Container>
  )
}
export default Movies
