import { uiActions } from "./ui-slice";

export const submitOrderData = (order) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending order data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-cart-app-37b01-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            items: order.items,
            totalPrice: order.totalPrice,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending order data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent order data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending order data failed!",
        })
      );
    }
  };
};
