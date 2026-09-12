import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ProductCatalog from './pages/ProductCatalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import QuoteRequest from './pages/QuoteRequest.jsx'
import RealisationDetail from './pages/RealisationDetail.jsx'
import Realisations from './pages/Realisations.jsx'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-charcoal">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<ProductCatalog />} />
          <Route path="/produits/:slug" element={<ProductDetail />} />
          <Route path="/categories/:slug" element={<ProductCatalog />} />
          <Route path="/devis" element={<QuoteRequest />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:slug" element={<RealisationDetail />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}