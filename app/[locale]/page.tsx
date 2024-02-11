export default function Home() {
  return (
    // <main className="bg-cover bg-center screen-content home-image">
    //   <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50"></div>
    // </main>
    <main className="flex min-h-[calc(100vh-96px)] justify-center items-center flex-col">
      <div className="w-full min-h-[calc(100vh-96px)] bg-[url('_assets/cafe/cafe.jpg')] bg-cover bg-center">
        <div
          className="w-full min-h-[calc(100vh-96px)] flex  justify-center items-center 
             bg-secondary/30 "
        >
          <h1 className="text-6xl font-bold text-white">Home page</h1>
        </div>
      </div>
    </main>
  );
}
