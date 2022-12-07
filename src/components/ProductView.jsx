import React from "react";
import { useState } from "react";
import Button from "./Button";

const ProductView = (props) => {
  const product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionEx, setDescriptionEx] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="#" />
          </div>

          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="#" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="#" />
        </div>
        <div className={`product-description ${descriptionEx ? "expand" : ""}`}>
          <div className="product-description__title">chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button size="sm" onClick={() => setDescriptionEx(!descriptionEx)}>
              {descriptionEx ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {Number(product.price)}
          </span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((items, index) => (
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
            {product.size.map((items, index) => (
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
      </div>
    </div>
  );
};

export default ProductView;
