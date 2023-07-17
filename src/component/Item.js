import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Item = ({id, description, price, img, title, quantity}) => {

   const {removItem, increment, decrement} = useContext(CartContext);

  return (
    <>
    <div className='items-info'>
                            <div className='product-img'>
                                <img src={img} alt='product' />
                            </div>
                            <div className='title'>
                                <h2>{description}</h2>
                                <p>{title}</p>
                            </div>
                            <div className='add-minus-quantity'>
                                <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
                                <input type='text' placeholder={quantity} />
                                <i className="fas fa-plus add" onClick={() => increment(id)}></i>
                            </div>
                            <div className='price'>
                                <h3>{price}</h3>
                            </div>
                            <div className='remove-item'>
                                <i className="fas fa-trash-alt remove" onClick={() => removItem(id)}></i>
                            </div>
                        </div>
                        <hr/>
    </>
  )
}

export default Item