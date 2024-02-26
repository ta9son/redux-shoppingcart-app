import React from 'react'
import {PlusIcon, MinusIcon} from '../HeroIcons'
import { useDispatch } from 'react-redux';
import { removeItem, increaseAmount, decreaseAmount } from '../features/cart/CartSlice';

const CartItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
        <img src={img} alt={title}/>
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}円</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>削除</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() => dispatch(increaseAmount(id))}>
                <PlusIcon />
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={() => {
                if(amount === 1) {
                    dispatch(removeItem(id));
                } else {
                    dispatch(decreaseAmount(id));
                }
            }}>
                <MinusIcon />
            </button>
        </div>


    </article>
  )
}

export default CartItem
