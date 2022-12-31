interface LoggedInLayoutProps {
  content: React.ReactNode;
}

const LoggedInLayout = ({ content }: LoggedInLayoutProps) => {
  return (
    <main className="h-screen flex flex-col max-w-sm mx-auto bg-slate-900 pb-2 px-2">
      <h3 className="text-white text-size font-bold py-4 px-4 text-xl text-center">
        Muzz
      </h3>
      {content}
    </main>
  );
};

export default LoggedInLayout;
