import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Flow from "./pages/Flow";
import PopularTrip from "./components/PopularTrip";
import SearchTravel from "./components/SearchTravel";
import Reviews from "./components/Rewies";
import Footer from "./components/Footer";

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<>
          <Home />
          <div className="py-10">
            <PopularTrip />
          </div>
          <div className="py-10">
            <SearchTravel />
          </div>
          <div className="py-10">
            <Reviews />
          </div>
          <Footer />
        </>} />
        <Route path="/flow" element={
          <>
            <Navbar />
            <Flow />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
