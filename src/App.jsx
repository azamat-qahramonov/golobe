import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Flow from "./pages/Flow";
import PopularTrip from "./components/PopularTrip";
import SearchTravel from "./components/SearchTravel";
import Reviews from "./components/Rewies";
import Footer from "./components/Footer";
import Together from "./components/Together";
import Travel from "./components/Travel";
import Backpacking from "./components/Backpacking";
import Stays from "./pages/Stays";

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
        <Route path="/flights" element={
          <>
            <Navbar />
            <Flow />
            <Together />
            <Travel />
            <Backpacking />
            <Footer />
          </>
        } />
        <Route path="/stays" element={
          <>
            <Navbar />
            <Stays />
            <div className="py-14">
              <PopularTrip />
            </div>
            <Travel />
            <Backpacking />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
