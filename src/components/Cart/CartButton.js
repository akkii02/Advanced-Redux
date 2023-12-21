import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiAction.toggle())
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
