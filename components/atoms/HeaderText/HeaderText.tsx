const HeaderText = ({ text }: { text: string }) => {
  return (
    <h1 className="text-white text-size font-bold py-2 px-4 text-3xl">
      {text}
    </h1>
  );
};
export default HeaderText;
