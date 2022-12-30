// write a component that shows a screen saying there are no more profiles to swipe through
const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        You have no more matches!
      </h1>
    </div>
  );
};
export default Empty;
