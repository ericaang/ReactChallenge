import { useEffect, useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  //const cart = [{ name: 'apple', quantity: 3, price: 0.39 }]
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

  const addCart = (item) => {
    if (!cart.filter((cartItem) => cartItem.name === item.name ).length) {
    setCart((prev) => [...prev, {...item, quantity: 1}] )
    }
    //localStorage.setItem('CartItem', JSON.stringify(cart));
    //console.log(cart);
  }

  const increment = (item) => {
    const newCart = [...cart];
    newCart.forEach((cartItem) => {
      if (cartItem.name === item.name) 
        cartItem.quantity++;
    })
    setCart(newCart);
  }

  const decrement = (item) => {
    const newCart = [...cart];
    newCart.forEach((cartItem, index) => {
      if (cartItem.name === item.name) {
        if (cartItem.quantity > 1)
        cartItem.quantity--;
        else 
          newCart.splice(index, 1);
      }
    })
    setCart(newCart);
  }

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    })
    setTotalCost(total.toFixed(2));
  }, [cart])

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => decrement(item)}>-</button>
                {item.quantity}
                <button onClick={() => increment(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${totalCost}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart