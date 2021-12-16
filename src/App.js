import { Features, Footer, Header, Apps } from "./containers";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Apps />
      <Footer />
    </div>
  );
}

export default App;
