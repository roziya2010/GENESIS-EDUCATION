import React, { useState, useEffect } from 'react'
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  FormGroup,
  Input,
} from 'reactstrap'
import styled from 'styled-components'
import axios from 'axios'

const Image = styled('img')`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
const Container = styled('div')`
  justify-content: center;
  align-items: center;
  display: flex;
`
const Last = styled('h5')`
  justify-content: center;
  align-items: center;
  display: flex;
`
const SubContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`
const Grid = styled(`div`)`
  width: 70%;
`
const SearchButton = styled('button')`
  float: left;
  width: 5%;
  padding: 10px;
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
`
const Search = styled('div')`
display: flex;
`

const items = [
  {
    src: 'https://api.uznews.uz/storage/uploads/posts/images/58690/inner/UisQM4RYxT.jpg',
    altText: '',
    caption: 'Our school ',
    key: 1,
  },
  {
    src: require('../img/GE_boys.jpg'),
    altText: '',
    caption: '1 grade Boys',
    key: 2,
  },
  {
    src: require('../img/GE_girls.jpg'),
    altText: '',
    caption: '1 grade Girls',
    key: 3,
  },
]

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    )
  })
  const searchSubmit = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a06703a3a956c84f212f678361ef4431&language=en-US&page=1&query=${search}`
      )
      .then((data) => setData(data))
  }
  console.log(data)
  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Container>
        <h1>Welcome to НОУ "Genesis Education"</h1>
      </Container>
      <Last>
        Our school located in Tashkent. In our school we teach all subjects, but throughly we teach
        English and Math. If you want to study with us, contact us.
      </Last>
      <Last>Our phone number: +998 95 478 70 70</Last>
      <FormGroup onSubmit={searchSubmit}>
        <Search>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton onClick={searchSubmit}>Submit</SearchButton>
        </Search>
      </FormGroup>
      {data && (
        <SubContainer>
          {data.data.results.map((d) => (
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
        </SubContainer>
      )}
    </div>
  )
}

export default Example
