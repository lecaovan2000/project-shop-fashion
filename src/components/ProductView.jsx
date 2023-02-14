import { useState, useEffect } from "react";
import Button from "./Button";
import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItems } from "../redux/shopping-cart/cartItemSlice";

const ProductView = (props) => {
  let product = props.product;
  const dispatch = useDispatch();

  if (product === undefined) {
    product = {};
  }

  const [previewImg, setPreviewImg] = useState(product?.img_avatar?.image01);

  const [descriptionEx, setDescriptionEx] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const check = () => {
    if (color === undefined) {
      alert("Chưa chọn màu sắt");
      return false;
    }
    if (size === undefined) {
      alert("Chưa chọn kích cỡ");
      return false;
    }
    return true;
  };
  const addToCart = () => {
    // if (check()) addItems() console.log("logg", { color, size, quantity });
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      alert("success");
    }
  };

  const goToCart = () => {
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      props.history.push("/cart");
    }
  };
  useEffect(() => {
    setPreviewImg(product?.img_avatar?.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product?.img_avatar?.image01)}
          >
            <img src={product?.img_avatar?.image01} alt="#" />
          </div>

          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product?.img_avatar.image02)}
          >
            <img src={product?.img_avatar?.image02} alt="#" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="#" />
        </div>
        <div className={`product-description ${descriptionEx ? "expand" : ""}`}>
          <div className="product-description__title">chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></div>
          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionEx(!descriptionEx)}>
              {descriptionEx ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product?.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {Number(product?.price)}
          </span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product?.colors?.map((items, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === items ? "active" : ""
                }`}
                onClick={() => setColor(items)}
              >
                <div className={`circle bg-${items}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product?.size?.map((items, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === items ? "active" : ""
                }`}
                onClick={() => setSize(items)}
              >
                <span className="product__info__item__list__item__size">
                  {items}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Số Lượng</div>
          <div className="product__info__item__quantity">
            <div
              onClick={() => updateQuantity("minus")}
              className="product__info__item__quantity__btn"
            >
              <i className="bx bx-minus"></i>
            </div>

            <div className="product__info__item__quantity__input">
              {quantity}
            </div>

            <div
              onClick={() => updateQuantity("plus")}
              className="product__info__item__quantity__btn"
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div
          className={`product-description mobile ${
            descriptionEx ? "expand" : ""
          }`}
        >
          <div className="product-description__title">chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></div>
          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionEx(!descriptionEx)}>
              {descriptionEx ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
          <Button onClick={() => goToCart()}>Mua ngay</Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductView);
