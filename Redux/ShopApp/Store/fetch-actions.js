import { cartShowActions } from "./cart-toggle";
import { itemCountActions } from "./item-count";

export const fetchCartData = () => {
  return async (dispatch) => {
    // returning async here allows us to use await on the fetchData function
    const fetchData = async () => {
      const response = await fetch(
        "https://restaurant-3dfaf-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        itemCountActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        cartShowActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (itemCount) => {
  return async (dispatch) => {
    dispatch(
      cartShowActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://restaurant-3dfaf-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: itemCount.cartItems,
            totalQuantity: itemCount.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        cartShowActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartShowActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
