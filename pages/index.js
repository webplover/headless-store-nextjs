import axios from "axios";
import Link from "next/link";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { data } = props;
  console.log(data.data);
  return (
    <div className="flex flex-wrap overflow-hidden p-8 container mx-auto">
      {data.data.map((product, index) => (
        <div
          className="my-1 px-2 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/4 mb-8"
          key={index}
        >
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href={product.permalink}>
              <a>
                <Image
                  layout="responsive"
                  width="300"
                  height="300"
                  src={product?.images[0]?.src}
                  className="rounded-t-lg"
                />
              </a>
            </Link>
            <div class="p-5">
              <Link href={product.permalink}>
                <a>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                </a>
              </Link>
              <Link href={product.permalink}>
                <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart
                  <svg
                    aria-hidden="true"
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
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
