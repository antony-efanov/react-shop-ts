import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getItems } from "../../store/items/thunk";
import { getCartItems } from "../../store/cartItems/thunk";
import { getFavItems } from "../../store/favItems/thunk";
import Router from "../../router/Router";

const Home = () => {
  const { items } = useAppSelector((store) => store.items);
  const { cartItems } = useAppSelector((store) => store.cartItems);
  const { favItems } = useAppSelector((store) => store.favItems);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getFavItems());
    dispatch(getItems());
  }, []);

  return (
    <div>
      <Router />
    </div>
  );
};

export default Home;
