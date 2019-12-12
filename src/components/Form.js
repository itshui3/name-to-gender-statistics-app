// React
import React, { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { attemptFetch, setIsHui } from '../redux/actions'
// Styling
import './Form.scss'

function Form(props) {

  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleClick = ev => {
    ev.preventDefault()
    if (!name.toLowerCase().includes('xuhui zhu')){
      dispatch(attemptFetch(name))
      dispatch(setIsHui(false))
    } else {
      console.log('hui logged')
      dispatch(setIsHui(true))

    }
    setName('')
  }

  const handleChange = ev => {
    setName(ev.target.value)
  }

  return (
    <form className="form">
      <input 
        placeholder="a name"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleClick}>Go!</button>
    </form>
  )
}

export default Form;