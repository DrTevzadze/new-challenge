import { Provider } from "react-redux";
import { store } from "../store";

function Homepage() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="text-center bg-white shadow-md p-4">
          <h1 className="text-2xl font-bold text-blue-500 xl:text-6xl sm:text-4xl cursor-pointer">
            Settlement Demo
          </h1>
        </header>
        <main className="mt-4">hi</main>
      </div>
    </Provider>
  );
}

export default Homepage;
