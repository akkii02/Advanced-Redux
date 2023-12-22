import { replaceCart } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Fetching",
        message: "Fetching cart data...",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://advenced-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!!");
      }

      const data = await response.json(); 

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data successfully",
        })
      );

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://advenced-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
