import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
const CartButton = (props) => {
  const products = useSelector(state => state.cart.items)
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiAction.toggle())
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{products.length}</span>
    </button>
  );
};

export default CartButton;
