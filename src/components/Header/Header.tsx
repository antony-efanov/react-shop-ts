import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as OrdersIcon } from "../../assets/icons/orders.svg";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import { onClickCart } from "../../store/cartItems/slice";
import { onClickFav } from "../../store/favItems/slice";
import { onClickOrders } from "../../store/orders/slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { cartItems, cartOpened } = useAppSelector((store) => store.cartItems);
  const { favItems, favOpened } = useAppSelector((store) => store.favItems);
  const { ordersOpened } = useAppSelector((store) => store.orders);

  const onCart = () => {
    dispatch(onClickCart());
  };

  const onFav = () => {
    dispatch(onClickFav());
  };

  const onOrders = () => {
    dispatch(onClickOrders());
  };

  return (
    <header className="header">
      <Link className="brand" to="/">
        <div className="brand__logo">
          <img width={65} src={Logo} alt="Logo" />
        </div>
        <div className="brand-text">
          <h2 className="brand__title">Merch.ua</h2>
          <p className="brand__subtitle">Магазин сувенірних речей</p>
        </div>
      </Link>

      <div className="user">
        <button
          aria-label="Cart"
          onClick={onCart}
          className={
            cartOpened
              ? "user__btn user__btn--cart user__btn--cart__active"
              : "user__btn user__btn--cart"
          }
        >
          <CartIcon />
          {cartItems.length > 0 && (
            <div className="cartCounter">
              <p>{cartItems.length}</p>
            </div>
          )}
        </button>
        <Link
          aria-label="Favorite"
          to="/favorite"
          onClick={onFav}
          className={
            favOpened
              ? "user__btn user__btn--fav__active"
              : "user__btn user__btn--fav"
          }
        >
          <FavoriteIcon />
          {favItems.length > 0 && (
            <div className="favCounter">
              <p>{favItems.length}</p>
            </div>
          )}
        </Link>
        <Link
          aria-label="Orders"
          to="/orders"
          onClick={onOrders}
          className={
            ordersOpened
              ? "user__btn user__btn--user__active"
              : "user__btn user__btn--user"
          }
        >
          <OrdersIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
