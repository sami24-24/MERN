import Header from '../components/Header';

function Home() {
  return (
    <div className="px-12">
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="text-gray-600">Welcome to the website </p>
      </main>
    </div>
  );
}

export default Home;
