import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import styled from 'styled-components'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  overflow-x: scroll;
`
const Cangaroo = styled('img')`
  height: 12rem;
`
const Cards = styled(Card)`
  &:hover {
    cursor: pointer;
  }
  transition: all 0.5s;
`

function News() {
  return (
    <div>
      <Container>
        <Cards
          style={{
            width: '18rem',
          }}
        >
          <img
            alt="Sample"
            src="https://i1.wp.com/lomonossow-schule.de/wp-content/uploads/2021/08/202108011_EDIT_Mitra_Ero%CC%88ffnung-12.jpg?fit=1100%2C730&ssl=1"
          />
          <CardBody>
            <CardTitle tag="h5">Berlin</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              20.11.2022 year
            </CardSubtitle>
            <CardText>
              Now our students are in Berlin. And now they study, live and have Olympiad st school
              International Lomonosov School.
            </CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <img
            alt="Sample"
            src="https://www.swedishnomad.com/wp-content/images/2019/10/Petronas-Twin-Towers.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Malaysia</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>
              Dear parents and students! We have a great opportunity to spend two weeks cold winter
              in sunny Malaysia.
            </CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <img
            alt="Sample"
            src="http://assets.kompasiana.com/items/album/2021/06/22/cover-60d1d8fb37f4b9428c4b30a2.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Netherlands and Switzerland</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>The next stop is the Netherlands and Switzerland.</CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <img
            alt="Sample"
            src="https://i.pinimg.com/736x/80/09/75/800975e4d8a25c91122329adc2985202.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Uzbekistan Kosike Karate Cup competitions</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>
              Today, our students participated in the Uzbekistan Koshiki Karate Cup competitions.
            </CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Cangaroo
            alt="Sample"
            src="data:image/png;base64,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"
          />
          <CardBody>
            <CardTitle tag="h5">REGISTRATION FOR THE KANGAROO CONTEST 2023</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>
              Dear students and their mentors! We are pleased to inform you that registration for
              participation in the annual mathematical contest “Kangaroo” has begun.
            </CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Cangaroo
            alt="Sample"
            src="https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg="
          />
          <CardBody>
            <CardTitle tag="h5">December is History Month</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText>
              History (from Ancient Greek ἱστορία (historía) 'inquiry; knowledge acquired by
              investigation') is the study and the documentation of the past.
            </CardText>
          </CardBody>
        </Cards>
      </Container>
    </div>
  )
}
export default News
