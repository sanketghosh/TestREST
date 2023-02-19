import { BlankBody, LeftBar, MiddleBar, RightBar } from "../components";

const ClientLayout = () => {
  const request = false;

  return (
    <main className="flex items-center gap-5 px-3 md:px-5">
      <LeftBar />

      {request ? (
        <div className="flex-[2] flex gap-3">
          <MiddleBar />
          <RightBar />
        </div>
      ) : (
        <BlankBody />
      )}
    </main>
  );
};

export default ClientLayout;
