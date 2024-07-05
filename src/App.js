import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/Store/store";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Body />
      <Footer/>
    </Provider>
  );
}

export default App;
