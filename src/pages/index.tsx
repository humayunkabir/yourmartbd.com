import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Layout from 'components/Layout';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/coming-soon');
  });

  return (
    <Layout title="Home">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-[100vh] gap-8">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-600 leading-[66px]">
            Welcome to <a href="https://yourmart.com">YourMart!</a>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
