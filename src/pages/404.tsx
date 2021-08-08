import Layout from 'components/Layout';
import Countdown from 'components/Countdown';

const ComingSoon = () => {
  return (
    <Layout title="Coming Soon">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-[100vh] gap-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-600 lg:leading-[66px]">
            YourMart Coming Soon!
          </h1>
          <Countdown />
        </div>
      </div>
    </Layout>
  );
};

export default ComingSoon;
