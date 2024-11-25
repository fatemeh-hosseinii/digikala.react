import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Storyitem = ({ story, loading }) => {
  return (
    <div className="flex flex-col justify-around items-center">
      {/* اسکلتون یا عکس */}
      <div className="border-2 border-[red] rounded-full p-1">
        {loading ? (
          <Skeleton circle={true} height={50} width={50} />
        ) : (
          <img
            className="object-cover w-[100%] rounded-full"
            src={story.image}
            alt={story.alt}
          />
        )}
      </div>

      {/* اسکلتون یا متن */}
      <p className="text-center xl:text-[12px] text-[10px] mt-2">
        {loading ? <Skeleton width={60} height={10} /> : story.title}
      </p>
    </div>
  );
};

export default Storyitem;
