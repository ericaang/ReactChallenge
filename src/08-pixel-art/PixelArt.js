import React, {useContext, useState} from 'react'

const colorContext = React.createContext({
  color: 'lightGrey',
  setColor: () => {}
});

/* function ColorPicker ({setColorSelected}) {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} 
        onClick={() => setColorSelected(color)}
      />)}
    </div>
  )
} */

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  const {setColor} = useContext(colorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} 
        onClick={() => setColor(color)}
      />)}
    </div>
  )
}

/* function Pixel () {
    const [backgroundColor, setBackgroundColor] = useState('lightGrey');
  return (
    <colorContext.Consumer>
        {value => <div style={{ height: '20px', width: '20px', backgroundColor: backgroundColor, margin: '1px' }} 
            onClick={() => setBackgroundColor(value)}
        />}
    /*</colorContext.Consumer>
  )
} */

function Pixel () {
  const {color} = useContext(colorContext);
  const [backgroundColor, setBackgroundColor] = useState('lightGrey');
return (
  <div style={{ height: '20px', width: '20px', backgroundColor: backgroundColor, margin: '1px' }} 
          onClick={() => setBackgroundColor(color)}
      />

)
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '220px', margin: '10px auto' }}>
        {pixels}
        </div>
  )
}

export default function PixelArt () {
    const [color, setColor] = useState('lightGrey');

  return (
    <colorContext.Provider value={{color, setColor}}>
        <div>
        {/*<ColorPicker setColorSelected={setColorSelected}/>*/}
        <ColorPicker />
        <Pixels />
        </div>
    </colorContext.Provider>
  )
}