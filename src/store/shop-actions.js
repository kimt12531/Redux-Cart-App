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

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://food-order-app-a4aeb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );
//     } catch (error) {
//       sendCartData().catch((error) => {
//         dispatch(
//           uiActions.showNotification({
//             status: "error",
//             title: "Error!",
//             message: "Sending cart data failed!",
//           })
//         );
//       });
//     }
//   };
// };
