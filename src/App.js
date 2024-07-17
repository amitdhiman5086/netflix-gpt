import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/Store/store";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen max-w-screen ">
        <Body />
        <div className="m-auto mb-0">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
