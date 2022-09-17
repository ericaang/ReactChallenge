import { useReducer } from "react";

const initialState = {
    number1: 0,
    number2: 0,
    result: 'No results yet'
}

function reducer (state, action) {
    switch (action.type) {
        case 'number1':
        return {...state, number1: action.number};
        case 'number2':
        return {...state, number2: action.number};
        case 'Add':
          return {...state, result: state.number1 + state.number2};
        case 'Minus':
          return {...state, result: state.number1 - state.number2};
        case 'Reset':
        return initialState;
        default:
          return initialState;
      }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type:'number1', number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type:'number2', number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type: 'Add'})}>+</button>
        <button onClick={() => dispatch({type: 'Minus'})}>-</button>
        <button onClick={() => dispatch({type: 'Reset'})}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2></div>
    </div>
  )
}