import React from 'react'
import { Card, Col, CardTitle, CardText, Button, Table } from 'reactstrap'
import styled from 'styled-components'

const Cards = styled('div')`
  display: flex;
  transition: width 2s;
`
const GEchilonzor = styled('img')`
  height: 16.5rem;
`
const List = styled('div')`
  list-style: none;
`
const Names = styled('div')`
  margin-top: 5rem;
  margin: 5rem;
`
const Card1 = styled(Card)`
  transition: all 0.5s;

  &:hover {
    transition: all 0.4s;
    transform: translateX(-20px);
  }
`
const Card2 = styled(Card)`
  transition: all 0.5s;

  &:hover {
    transition: all 0.4s;
    transform: translateX(-20px);
  }
`
function Contactus() {
  // request, response
  // get  - Qanaqadur malumotni olib beradi
  // post  - Qanaqadur malumotni backendga jo'natadi
  // delete - Qanaqadur malumot o'chirib berar ekan
  // put - Qanaqadur malumotni qo'yib beradi
  // fetch - Qanaqadur malumot olib beradi

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="container">
        <h1>Contact НОУ"Genesis Education"</h1>
      </div>
      <Cards>
        <Col sm="1"></Col>

        <Col sm="4">
          <Card1 body>
            <img
              alt="Card"
              src="https://api.uznews.uz/storage/uploads/posts/images/58690/inner/UisQM4RYxT.jpg"
            />
            <CardTitle tag="h5">Contact НОУ"Genesis Education" Yakkasaray</CardTitle>
            <CardText>
              <List>
                <li>Adress: street Abdulla Kakhkhar, 49.</li>
                <li>Landmark: Istanbul City (Tashkent).</li>
                <li>Phone number: +998 95 478 70 70</li>
                <li>Instagram: @genesiseducation.uz</li>
                <li>Telegram: t.me/genesiseducation</li>
              </List>
            </CardText>
          </Card1>
        </Col>
        <Col sm="1"></Col>
        <Col sm="4">
          <Card2 body>
            <GEchilonzor
              alt="Card"
              src="data:image/jpeg;base64,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"
            />
            <CardTitle tag="h5">Contact НОУ"Genesis Education" Chilonzor</CardTitle>
            <CardText>
              <List>
                <li>Adress: Toshkent, Chilonzor dahasi, 1-mavze, 30</li>
                <li>IP: 100115</li>
                <li>Phone number: +998 71 253 40 43</li>
                <li>Instagram: @genesiseducation.uz</li>
                <li>Telegram: t.me/genesiseducation</li>
              </List>
            </CardText>
          </Card2>
        </Col>
        <Col sm="1"></Col>
      </Cards>
      <Names className="container">
        <Table striped>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Patronymic</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ms.</td>
              <td>Sitora</td>
              <td>0 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Marina</td>
              <td>Iskandarovna</td>
              <td>1 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Anna</td>
              <td>Olegovna</td>
              <td>1 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Tatyana </td>
              <td>Valerevna</td>
              <td>2 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Nadjie</td>
              <td>Talyatovna</td>
              <td>2 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Olga</td>
              <td>Eduardovna</td>
              <td>3 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Svetlana</td>
              <td>Sergeevna</td>
              <td>3 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Luiza</td>
              <td>Rafailevna</td>
              <td>4 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Natalya</td>
              <td>Gennadevna</td>
              <td>5 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Ms.</td>
              <td>Guli</td>
              <td>5 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Ladmila</td>
              <td>Yurevna</td>
              <td>5 "V" grade</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>Almira</td>
              <td>Ravilevna</td>
              <td>6 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>Albina</td>
              <td>Radikovna</td>
              <td>6 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>Albina</td>
              <td>Radikovna</td>
              <td>6 "V" grade</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>Viktoriya</td>
              <td>Yurevna</td>
              <td>7 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Anna</td>
              <td>Aleksandrovna</td>
              <td>7 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>Liliya</td>
              <td>Ravilevna</td>
              <td>8 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>Olesia</td>
              <td>Sergeevna</td>
              <td>8 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>Liliya</td>
              <td>Ravilevna</td>
              <td>8 "V" grade</td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td>Faniya</td>
              <td>Tagirovna</td>
              <td>9 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td>Olesia</td>
              <td>Sergeevna</td>
              <td>9 "B" grade</td>
            </tr>
            <tr>
              <th scope="row">22</th>
              <td>Aleksandra</td>
              <td>Gennadevna</td>
              <td>10 "A" grade</td>
            </tr>
            <tr>
              <th scope="row">23</th>
              <td>Aleksandra</td>
              <td>Gennadevna</td>
              <td>11 "A" grade</td>
            </tr>
          </tbody>
        </Table>
      </Names>
    </div>
  )
}
export default Contactus
