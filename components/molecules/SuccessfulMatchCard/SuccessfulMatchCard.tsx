interface SuccessfulMatchCardProps {
  name: string;
}

const SuccessfulMatchCard = ({ name }: SuccessfulMatchCardProps) => {
  return (
    <div className="h-full border border-grey flex flex-col text-slate-900 text-center align-center justify-center bg-white rounded-3xl shadow-lg overflow-hidden">
      <h1 className="text-xl font-bold  mb-4">
        Congratulations - You have a new match!
      </h1>
      <p>{name} is a successful match :)</p>
    </div>
  );
};
export default SuccessfulMatchCard;
