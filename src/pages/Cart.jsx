import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'

const Cart = () => {
  const {products} = useSelector(store => store.cart);

  const dispatch = useDispatch();

  const totalPriceCart = products.reduce((total, product) => total + 
  (product.quantity * product.product.price) ,0);

  const handlePurchaseCart = () => {
    dispatch(purchaseCart())
  }

 useEffect(() =>{
  dispatch(getAllCartProducts())
 },[])
  

  return (
    <main>
      <section>
        {
          products.map((product) => (
          <CartProduct key={product.id} product={product}/>))
        }
      </section>
<hr />
      <section>
        <div>
          <h2>Total</h2>
          <h3>$ {totalPriceCart}</h3>
        </div>
          <button onClick={handlePurchaseCart}>Checkout <i className='bx bx-cart' ></i></button>
      </section>

    </main>
  )
}

export default Cart