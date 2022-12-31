interface LoggedOutLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

const LoggedOutLayout = ({ header, content }: LoggedOutLayoutProps) => {
  return (
    <main className="h-screen flex flex-col items-center justify-evenly max-w-sm mx-auto bg-slate-900	">
      {header}
      <div className="container  mx-auto ">{content}</div>
    </main>
  );
};

export default LoggedOutLayout;
