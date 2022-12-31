import LoggedInLayout from "../../components/organisms/LoggedInLayout/LoggedInLayout";

const Empty = () => {
  return (
    <LoggedInLayout
      content={
        <div className="h-full border border-grey flex flex-col text-slate-900 text-center align-center justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
          <h1 className="text-xl font-bold  mb-4">You have no more matches!</h1>
          <p>Please try again later :) </p>
        </div>
      }
    />
  );
};
export default Empty;
