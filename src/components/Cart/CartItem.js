import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItemToCart,removeItemFromCart } from '../../store/cart-slice';
const CartItem = (props) => {
  const { id,title, quantity, total, price } = props.item;
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(addItemToCart({id,title, quantity, total, price}))
  }
  const removeHandler = () => {
    dispatch(removeItemFromCart(id));
  }
  
  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
