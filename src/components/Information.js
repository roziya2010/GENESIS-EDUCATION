import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  UncontrolledCarousel,
} from 'reactstrap'
import axios from 'axios' 

const Cards = styled('div')`
  margin-right: 1rem;
  border: 4rem;
  margin-top: 1rem;

  transition: all 0.5s;

&:hover {
  transition: all 0.4s;
  transform: translateY(-20px);
}
`
const Img = styled('img')`
  width: 15rem;
  height: 18rem;
  display: flex;
  flex-direction: row;
`
const Container = styled('div')`
  margin: 1rem;
  padding: 0, 1, 0, 1 rem;
`
const Information = styled('div')`
  display: flex;
  overflow-x: scroll;
`
const Modalbody = styled('div')`
  list-style: none;
  margin: 1rem;
`

const TextH3 = styled('h3')`
  &:hover {
    cursor: pointer;
  }
`

function Info() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(0)

  const Roziya = () => setModal(!modal)

  useEffect(() => {
    // Update the document title using the browser API

    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=1'
      )
      .then((data) => setData(data))
  }, [])
  console.log(data?.data?.results)
  return (
    <Container>
      <div>
        <Modal isOpen={modal} toggle={Roziya}>
          <ModalHeader toggle={Roziya}>Contact Us</ModalHeader>
          <Modalbody>
            <li>Our Telegram chanel: https://t.me/genesiseducation</li>
            <li>Our Instagram chanel: Genesis Education.</li>
            <li>Our phone number: +998 71 253 40 43</li>
          </Modalbody>
          <ModalFooter>
            <Button color="secondary" onClick={Roziya}>
              Visit the school.
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <UncontrolledCarousel
          items={[
            {
              altText: 'Slide 1',
              caption: 'Slide 1',
              key: 1,
              src: 'https://i.ytimg.com/vi/ZwlAAyveMG0/maxresdefault.jpg',
            },
            {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://storage.kun.uz/source/9/UWzTjiTPSzDx6KKC-ouiaBgJmN5D5Hpv.jpg',
            },
            {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://storage.kun.uz/source/9/pQGVW-LlyH6UUY6COFyGFsvDWsaqhFae.jpg',
            },
          ]}
        />
      </div>
      <Information>
        {/* {data?.data?.results.map((el, index) => (
          <Cards
            key={index}
            style={{
              width: '18rem',
            }}
          >
            <Img alt="Sample" src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`} />
            <CardBody>
              <CardTitle tag="h5">{el?.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {el.release_date}
              </CardSubtitle>
              <CardText>Our students at Antalya Olympiad.</CardText>
            </CardBody>
          </Cards>
        ))} */}

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Img
            alt="Sample"
            src="https://storage.kun.uz/source/7/teArExP1WmTsD0nJhp2HlG8iAs_2oDFB.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Antalya International Olympiad.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2021 year
            </CardSubtitle>
            <CardText>Our students and director at Antalya Olympiad.</CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Img
            alt="Sample"
            src="https://storage.kun.uz/source/7/0_WROPIGbd98el9KTja6jwbn4nYi3z1K.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Antalya International Olympiad.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2021 year
            </CardSubtitle>
            <CardText>Our student and director in rewarding.</CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Img
            alt="Sample"
            src="https://storage.kun.uz/source/7/7hdfjG8Xc6lYmeTsGeshIobz4sXIXJdt.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Antalya International Olympiad.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2021 year
            </CardSubtitle>
            <CardText>Olympiad choreography</CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Img
            alt="Sample"
            src="https://storage.kun.uz/source/7/_zKyrV5jEZ3jU3yyzK4TkL_coBYlMxqA.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Antalya International Olympiad.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2021 year
            </CardSubtitle>
            <CardText>Our student Alayarova Shirin.</CardText>
          </CardBody>
        </Cards>

        <Cards
          style={{
            width: '18rem',
          }}
        >
          <Img
            alt="Sample"
            src="https://storage.kun.uz/source/7/XgnOs3OoawVjTGXmrZKOfZ-L_RYkAbRQ.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">Antalya International Olympiad.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2021 year
            </CardSubtitle>
            <CardText>Our cups</CardText>
          </CardBody>
        </Cards>
      </Information>
    </Container>
  )
}
export default Info
