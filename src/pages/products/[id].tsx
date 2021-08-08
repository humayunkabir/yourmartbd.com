import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface ProductProps {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  // if (!ctx.params) {
  //   return {
  //     redirect: {
  //       destination: '/products',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      id: ctx.params?.id,
      revalidate: 1,
    },
  };
};

const Product = ({ id }: ProductProps) => {
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
};

export default Product;
