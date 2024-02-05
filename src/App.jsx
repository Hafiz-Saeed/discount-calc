import { Col, Row } from 'react-bootstrap';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {

  const[amount,setAmount] = useState()
  const[discount,setDiscount] = useState()
  const[result,setResult] = useState()

const calculate = () =>{
       
const disc = discount/100;
const amnt = amount * disc;

const total = amount - amnt;
setResult(total)


}

  return (
    <>
<div className="box">
      <Row>
        <Col lg={5}>
          <img className='img-fluid rounded ' style={{width:"500px",height:"400px",marginLeft:"50px"}} src="https://64.media.tumblr.com/c76c332b490d74227b442ead50fd4458/aaee53103f387182-f8/s540x810/642e2596d198f684541f79ff965728d6166479c1.gif" alt="img" />
        </Col>
        <Col lg={7}>
          <h1 className='text-center'>Discount Calculator</h1>

          <input type="text" style={{marginLeft:"20%"}}  onChange={(e) => setAmount(e.target.value)} className='mt-2  mb-2' placeholder='Enter amount' /> <br />
          <input type="text" style={{marginLeft:"20%"}} onChange={(e) => setDiscount(e.target.value)}  placeholder='Enter discount'  />

          <div className="output mt-3">
            <h4 className='text-center'>Discounted amount is : {result}</h4>
          </div>
          
          <Button onClick={calculate} variant="success" >DISCOUNT</Button>{' '}
          <Button onClick={() => setResult(0)} variant="outline-light">RESET</Button>{' '}   
        </Col>


      </Row>
      </div>
    </>
  );
}   

export default App;
