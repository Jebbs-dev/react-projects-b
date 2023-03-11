import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import "./index.css";
import Layout from "./Layout/Layout";
import Notification from "./Notification";
import Products from "./Shop/Products";
import { fetchCartData, sendCartData } from "./Store/fetch-actions";

let isInitial = true;

const Home = () => {
  const dispatch = useDispatch();
  const isShowing = useSelector((state) => state.cartShow.isShowing);

  const itemCount = useSelector((state) => state.itemCount);
  const notification = useSelector((state) => state.cartShow.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (itemCount.changed) {
      dispatch(sendCartData(itemCount));
    }
  }, [itemCount, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowing && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default Home;
