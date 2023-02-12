// import { useState, useEffect } from "react";

// import ProductData from "../assets/fake-data/products";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Gird";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

// import productApi from "../modalApi/productApi";

const Product = (props) => {
  const relatedProduct = productData.getProducts(12);
  const product = productData.getProductBySlug(props.match.params.slug);
  console.log("product", product);

  // const [getProduct, setGetProduct] = useState({});

  // const callApiGetAllProduct = async () => {
  //   try {
  //     const response = await productApi.getAllProduct();
  //     setGetProduct(response.data);
  //     console.log("call api", response);
  //   } catch (error) {
  //     console.log("looi", error);
  //   }
  // };

  // useEffect(() => {
  //   callApiGetAllProduct();
  // }, [props.match.params.slug]);

  // const getProductBySlug = (slug) => {
  //   const selectProduct = getProduct.find((e) => e.slug === slug);
  //   return selectProduct;
  // };
  // const products = getProductBySlug(props.match.params.slug);
  // console.log("slug", products);

  return (
    <Helmet title={product?.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
      </Section>
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} xmCol={1} gap={20}>
            {relatedProduct.map((items, index) => (
              <ProductCard
                key={index}
                img01={items.img_avatar.image01}
                img02={items.img_avatar.image02}
                name={items.name}
                price={items.price}
                slug={items.slug}
              />
            ))}{" "}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
