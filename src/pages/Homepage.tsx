import { Provider } from "react-redux";
import { store } from "../store";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Homepage() {
  return (
    <Provider store={store}>
      <Layout>
        <header className="text-center bg-white shadow-md p-4 rounded-md mb-4">
          <h1 className="text-3xl font-bold text-blue-500 xl:text-6xl sm:text-4xl cursor-pointer">
            Settlement Demo
          </h1>
        </header>
        <section className="bg-white p-4 shadow-md rounded-md text-center mb-4">
          <p className="text-lg font-medium text-gray-700 sm:text-xl">
            Please click on both buttons to check Party A and Party B forms and
            their interaction.
          </p>
        </section>
        <div className="flex space-x-4">
          <Link to="/partyA">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Party A Form
            </button>
          </Link>
          <Link to="/partyB">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Party B Form
            </button>
          </Link>
        </div>
      </Layout>
    </Provider>
  );
}

export default Homepage;
