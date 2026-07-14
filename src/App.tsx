import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Transform from './components/Transform'
import CoreFeatures from './components/CoreFeatures'
import Differentiation from './components/Differentiation'
import SpecsTable from './components/SpecsTable'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-text">
      <Navbar />
      <main>
        {/* <Headbanner /> */}
        {/* <ProductCard /> */}
        <Hero />
        <Transform />
        <CoreFeatures />
        <Differentiation />
        <SpecsTable />
      </main>
      <Footer />
    </div>
  )
}
