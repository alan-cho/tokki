import Container from "@/app/_components/video/Container";

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="flex h-full flex-1 flex-col items-center">
        <Container />
      </div>
      <div className="flex h-full flex-1 flex-col items-center">
        Transcript goes here
      </div>
    </div>
  );
};

export default Home;
