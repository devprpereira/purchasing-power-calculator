import Footer from "./components/structure/Footer";
import BodyCard from "./components/cards/BodyCard";
import Items from "./components/items/Items";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BodyCard>
      <Items />
      <Footer />
    </BodyCard>
  );
};

export default App;
