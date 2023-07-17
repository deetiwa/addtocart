import React, {useContext} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import { CartContext } from './Cart';

const ContextCart = () => {
    const {item, clearCart, totalItem, totalAmount } = useContext(CartContext)
  return (
    <>
     <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
                    <h3>continue Shopping</h3>
                </div>
                <div className='cart-icon'>
                    <img src='./images/cart.png' alt='cart' />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
                <div className='cart-items'>
                    <div className='cart-items-container'>
                    <Scrollbars>
                        {
                            item.map((curItem) => {
                                return <Item key={curItem.id}{...curItem}/>
                            })
                        }
                        
                        
                        </Scrollbars>    
                    </div>
                </div>
                <div className='card-total'>
                 <h3>Cart Total : <span>{totalAmount}</span></h3>
                 <button>Checkout</button>
                 <button className='delete' onClick={clearCart}>Clear Cart</button>
                </div> 
            </section>
    </>
  )
}

export default ContextCart