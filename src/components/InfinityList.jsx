import { useRef, useState, useEffect } from "react";
import Grid from "../components/Gird";
import ProductCard from "./ProductCard";

const InfinityList = (props) => {
  const perLoad = 6;
  const listRef = useRef(null);
  const [data, setData] = useState(props.data.slice(0, perLoad));
  const [load, setLoad] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.screenY + window.innerHeight >=
        listRef.current.clientHeight + listRef.current.offsetTop + 200
      ) {
        setLoad(true);
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItem = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;
      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItem();
    setLoad(false);
  }, [load, index, data]);
  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {data.map((items, index) => (
          <ProductCard
            key={index}
            img01={items.img_avatar.image01}
            img02={items.img_avatar.image02}
            name={items.title}
            price={items.price}
            slug={items.slug}
          />
        ))}
      </Grid>
    </div>
  );
};

export default InfinityList;
