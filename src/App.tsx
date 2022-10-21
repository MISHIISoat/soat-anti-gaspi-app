import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateOffer from "./pages/createOffer/CreateOffer";
import { ErrorBoundary, Layout } from "./components";
import OffersList from "./pages/Offers";
import CreateContact from "./pages/CreateContact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ValidatedOffer from "./pages/ValidatedOffer/ValidatedOffer";
import DeletedOffer from "./pages/DeletedOffer/DeletedOffer";


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/createOffer" element={<CreateOffer />} />
            <Route path="/contact/:offerId" element={<CreateContact />} />
            <Route path="/validated" element={<ValidatedOffer />} />
            <Route path="/deleted" element={<DeletedOffer />} />
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
