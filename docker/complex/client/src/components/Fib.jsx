import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/Fib.css'

export const Fib = () => {
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: ''
  })
  
  useEffect(() => {
    fetchValues()
    fetchIndexes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current') 
    setState({ ...state, values: values.data })
  }

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all') 
    setState({ ...state, seenIndexes: seenIndexes.data })
  }

  const renderSeenIndexes = () => state.seenIndexes.map(({ number }) => number).join(', ')
  const renderValues = () => {
    const entries = []
    for (let key in state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {state.values[key]}
        </div>
      )
    }
    return entries
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/api/values', {
      index: state.index
    })
    setState({ ...state, index: '' })
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <label className='form-label'>Enter your index:</label>
        <input
          className='index'
          type="text"
          value={state.index}
          onChange={(event) => setState({ ...state, index: event.target.value})}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated values:</h3>
      {renderValues()}

    </div>
  )
}
