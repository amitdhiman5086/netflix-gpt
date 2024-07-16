import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/Store/store";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen ">
        <Body />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
