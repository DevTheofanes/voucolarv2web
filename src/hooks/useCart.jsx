import { createContext, useContext, useEffect, useState } from "react";
// import { api } from "../services/api";

const CartContext = createContext([]);

export function CartContextProvider({children}){
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)

  useEffect(() =>{
    const cartData = JSON.parse(localStorage.getItem('@voucolar/cart'))
    setCart(cartData)


    const totalCart = localStorage.getItem('@voucolar/totalCart');
    setTotal(totalCart)

    const quantityInCart = localStorage.getItem('@voucolar/quantity');
    setQuantity(quantityInCart)
  }, [])

  async function updateTotal(cartUpdated){
    let totalUpdated = 0;
    for (const key in cartUpdated) {
      if (Object.hasOwnProperty.call(cartUpdated, key)) {
        const element = cartUpdated[key];
        
        totalUpdated += element.subtotal
      }
    }

    setTotal(totalUpdated)
    localStorage.setItem('@voucolar/totalCart', JSON.stringify(totalUpdated));
  }

  async function updateQuantity(cartUpdated){
    let quantityUpdated = 0;
    for (const key in cartUpdated) {
      if (Object.hasOwnProperty.call(cartUpdated, key)) {
        const element = cartUpdated[key];
        
        quantityUpdated += element.amount;
      }
    }

    setQuantity(quantityUpdated)
    localStorage.setItem('@voucolar/quantity', JSON.stringify(quantityUpdated));
  }


  async function addToCart(product){
    let cartUpdated = []

    let itemExists = false;
    // if(cart.length === 0) cartUpdated.push(product);

    for (const key in cart) {
      if (Object.hasOwnProperty.call(cart, key)) {
        const element = cart[key];
        
        if(Number(element.id) === Number(product.id)){
          itemExists = true;

          cartUpdated.push({
            ...product,
            subtotal: Number(product.value) * Number(product.amount)
          });
        } else{
          cartUpdated.push({
            ...element,
            subtotal: Number(element.value) * Number(element.amount)
          })
        }
      }
    }

    if(!itemExists){
      cartUpdated.push({
        ...product,
        subtotal: Number(product.value) * Number(product.amount)
      });
    }

    
    setCart(cartUpdated)
    localStorage.setItem('@voucolar/cart', JSON.stringify(cartUpdated));

    updateTotal(cartUpdated);
    updateQuantity(cartUpdated);
  }

  async function removeToCart(index){
    let cartUpdated = []
    for (const key in cart) {
      if (Object.hasOwnProperty.call(cart, key)) {
        const element = cart[key];
        
        if(Number(element.id) !== Number(index)){
          cartUpdated.push(element)
        }
      }
    }
   
    setCart(cartUpdated)
    localStorage.setItem('@voucolar/cart', JSON.stringify(cartUpdated));

    updateTotal(cartUpdated);
    updateQuantity(cartUpdated);
  }

  function incrementToCart(index){
    let cartUpdated = []

    for (const key in cart) {
      if (Object.hasOwnProperty.call(cart, key)) {
        const element = cart[key];
        
        let shape = {
          ...element
        }

        if(Number(element.id) === Number(index)){
          shape.amount += 1
          shape.subtotal = Number(shape.value) * Number(shape.amount)
        }

        cartUpdated.push(shape)
      }
    }

    setCart(cartUpdated)
    localStorage.setItem('@voucolar/cart', JSON.stringify(cartUpdated));

    updateTotal(cartUpdated);
    updateQuantity(cartUpdated);
  }

  function decrementToCart(index){
    let cartUpdated = []

    for (const key in cart) {
      if (Object.hasOwnProperty.call(cart, key)) {
        const element = cart[key];
        
        let shape = {
          ...element
        }

        if(shape.amount > 1 && Number(element.id) === Number(index)){
          shape.amount -= 1
          shape.subtotal = Number(shape.value) * Number(shape.amount)
        }

        cartUpdated.push(shape)
      }
    }

    setCart(cartUpdated)
    localStorage.setItem('@voucolar/cart', JSON.stringify(cartUpdated));

    updateTotal(cartUpdated);
    updateQuantity(cartUpdated);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, incrementToCart, decrementToCart, quantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const context = useContext(CartContext)
  return context
};