import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 1,
      price: 19.99,
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      price: 29.99,
      title: "Product 2",
      description: "Description for Product 2",
    },
    {
      id: 3,
      price: 39.99,
      title: "Product 3",
      description: "Description for Product 3",
    },
  ];
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(product=>
        <ProductItem
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
