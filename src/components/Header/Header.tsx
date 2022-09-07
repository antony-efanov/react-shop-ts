import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.webp";
import CartIcon from "../../assets/icons/cart.svg";

import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import { onClickCart } from "../../store/cartItems/slice";

const Header = () => {
  const { cartItems, cartVisibility } = useAppSelector(
    (store) => store.cartItems
  );
  const dispatch = useAppDispatch();

  const onCart = () => {
    dispatch(onClickCart());
  };
  return (
    <header>
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
            cartVisibility
              ? "user__btn user__btn--cart user__btn--cart__active"
              : "user__btn user__btn--cart"
          }
        >
          <img src={CartIcon} alt="cart_icon" />
          {cartItems.length > 0 && (
            <div className="cartCounter">
              <p>{cartItems.length}</p>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
