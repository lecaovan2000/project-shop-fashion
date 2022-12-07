import React from "react";

import ProductData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import { Section, SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Gird";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

const Product = (props) => {
  const product = ProductData.getProductBySlug(props.match.params.slug);
  const relatedProduct = ProductData.getProducts(12);
  return (
    <Helmet title={product.title}>
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
                img01={items.image01}
                img02={items.image02}
                name={items.name}
                price={items.price}
              />
            ))}{" "}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
