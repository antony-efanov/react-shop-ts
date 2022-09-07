import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getItems } from "../../store/items/thunk";
import { getCartItems } from "../../store/cartItems/thunk";
import { getFavItems } from "../../store/favItems/thunk";

const Home = () => {
  const { items } = useAppSelector((store) => store.items);
  const { cartItems } = useAppSelector((store) => store.cartItems);
  const { favItems } = useAppSelector((store) => store.favItems);

  const dispatch = useAppDispatch();

  const getProducts = () => {
    dispatch(getCartItems());
    dispatch(getFavItems());
    dispatch(getItems());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
};

export default Home;
