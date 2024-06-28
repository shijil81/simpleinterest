
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
    const[principle,setPrinciple]=useState(0)
    const[rate,setRate]=useState(0)
    const[year,setYear]=useState(0)
    const[interest,setInterest]=useState(0)
    const[isPrinciple,setIsPrinciple]=useState(true)
    const[isRate,setIsRate]=useState(true)
    const[isYear,setIsYear]=useState(true)



    const validate=(e)=>{
      const name = e.target.name 
      const value =e.target.value 
      // console.log(name,value);
      // console.log(!!value.match(/^[0-9]*$/));
      if(!!value.match(/^[0-9]*$/)){
        if(name=='principle'){
          setPrinciple(value)
          setIsPrinciple(true)
        }
        else if(name=='rate'){
          setRate(value)
          setIsRate(true)
        }else{
          setYear(value)
          setIsYear(true)
        }
      }else{
        if(name=='principle'){
          setPrinciple(value)
          setIsPrinciple(false)
        }
        else if(name=='rate'){
          setRate(value)
          setIsRate(false)
        }else{
          setYear(value)
          setIsYear(false)
        }
      }
    }

  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculate =(e)=>{
    e.preventDefault()
    if(principle=='' || rate ==''||year==''){
      alert('please fill the form completely')
    }else{
      setInterest((principle*rate*year)/100)
    }
  }
  

  return (
    <>
      <div className='row w-100 bg-dark vh-100'>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className='shadow p-5  mt-5 rounded border bg-white'>
           <div className='heading '>
              <h1 className='text-center'>Simple Interest App</h1>
              <p className='ms-3'>Calculate your simple interest Easly</p>
           </div>
            <div className='output text-center mb-3'>
                  <h1 className='fw-bold'>₹ {interest}</h1>
                  <p>Total simple interest</p>
            </div>
          <form className='mt-4' onSubmit={handleCalculate}>
              <div className='mb-3 '>
                  <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='principle' value={principle || ""}/>
                    {!isPrinciple&&
                      <p className='text-danger'>*Invalid Input</p>}
              </div>
              <div className='mb-3'>
                 <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='rate' value={rate || ""}/>
                 {!isRate&&
                  <p className='text-danger'>*Invalid Input</p>}
              </div>
              <div className='mb-3'>
                  <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100'onChange={(e)=>validate(e)} name='year' value={year || ""}/>
                  {!isYear&&
                    <p className='text-danger'>*Invalid Input</p>}
              </div>
              <div className='mb-3 button d-flex align-items-center'>
              <Button variant="contained" color='success' style={{width:'190px',padding:'15px', marginRight:'20px'}} disabled={isPrinciple && isRate && isYear?false:true} type='submit'>Calculate</Button>
              <Button variant="outlined" style={{width:'190px',padding:'15px'}} onClick={handleReset}>Reset</Button>
            </div>
          </form>
            
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
    </>
  )
}

export default App
