import axios from "axios";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { data } = props;
  console.log(data.data);
  return (
    <div class="flex flex-wrap -mx-1 overflow-hidden">
      {data.data.map((product, index) => (
        <div
          className="my-1 px-1 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/4"
          key={index}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/get-products`
  );

  return {
    props: {
      data,
    },
  };
}
