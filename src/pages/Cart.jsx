import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItemSlice.value);

  const [cartProducts, setCartProduct] = useState(
    productData.getCartItemDetail(cartItems)
  );
  const [totalProducts, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItemDetail(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàn">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>bạn đang có {totalProducts} sản phẩm</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to={"/catalog"}>
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
