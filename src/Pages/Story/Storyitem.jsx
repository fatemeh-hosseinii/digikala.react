const Storyitem = ({ story }) => {
  return (
      <div className="flex flex-col justify-around items-center">
          <div className="border-2 border-[red] rounded-full p-1">
            <img className="object-cover w-[100%] rounded-full" src={story.image} alt={story.alt} />
            
          </div>
          <p className="text-center text-[12px] mt-2">{story.title}</p>
         
      </div>
  );
};

export default Storyitem;