import { Provider } from "react-redux";
import { store } from "../store";

function Homepage() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-4 rounded-md">
        <header className="text-center bg-white shadow-md p-4">
          <h1 className="text-3xl font-bold text-blue-500 xl:text-6xl sm:text-4xl cursor-pointer">
            Settlement Demo
          </h1>
        </header>
        <main className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <section className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Party A View
            </h2>
          </section>
          <section className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Party B View
            </h2>
          </section>
        </main>
      </div>
    </Provider>
  );
}

export default Homepage;
