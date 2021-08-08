import Preloader from './Preloader';
import Countdown from './Countdown';

const ComingSoon = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center min-h-[100vh] gap-8">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-600 leading-[66px]">
          YourMart Coming Soon!
        </h1>
        <Countdown />
      </div>
      <Preloader />
    </div>
  );
};

export default ComingSoon;
