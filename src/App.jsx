import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter'

function App() {

  const {counterValue} = useSelector(state => state.counter)
  const dispatch = useDispatch()


  return (
    <>
      <h1>count is {counterValue}</h1>
      <div className="card">
        <button onClick={ () => { dispatch(increment()) }}>
          Increment
        </button>
        <button onClick={ () => { dispatch(decrement()) }}>
          Decrement
        </button>
        <button onClick={ () => { dispatch(incrementByAmount(2)) }}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
