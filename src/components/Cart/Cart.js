import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
 const cartProduct =  useSelector(state => state.cart.items)
 console.log("cartProduct",cartProduct)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartProduct.map((product)=>(
          <CartItem 
          key={product.id}
          item={{id:product.id, title:product.name, quantity:product.quantity, total:product.totalPrice, price:product.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
