import { uiActions } from "./ui-slice";
import { shopActions } from "./shop-slice";

export const fetchShopData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-cart-app-37b01-default-rtdb.asia-southeast1.firebasedatabase.app/catalogue.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch shop data.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const shopData = await fetchData();
      dispatch(
        shopActions.replaceShop({
          items: shopData.items || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching shop data failed!",
        })
      );
    }
  };
};