import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity + 1,
        })
      );
      // setQuantity(quantity + 1);
    }
    if (opt === "-") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity - 1 < 1 ? 1 : quantity - 1,
        })
      );
      // setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.product.img_avatar.image01} alt="" />
      </div>

      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link
            to={`/catalog/${item.slug}`}
          >{`${item.product.title}-${item.color}-${item.size}`}</Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(Number(item.product.price))}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              onClick={() => updateQuantity("-")}
              className="product__info__item__quantity__btn"
            >
              <i className="bx bx-minus"></i>
            </div>

            <div className="product__info__item__quantity__input">
              {quantity}
            </div>

            <div
              onClick={() => updateQuantity("+")}
              className="product__info__item__quantity__btn"
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div onClick={() => removeCartItem()} className="cart__item__info__del">
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
