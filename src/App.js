import Navbar from "./components/Navbar"
import './App.css'
import Navbar2 from "./components/Navbar2"
import Layout1 from "./components/Layout1"
import Layout2 from "./components/Layout2"
import Layout3 from "./components/Layout3"
import Layout4 from "./components/Layout4"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
export default function App() {
  return (
    <div className="main">
      <Navbar/>
      <Navbar2/>
      <Layout1/>
      <Layout2/>
      <Layout3/>
      <Layout4/>
      <Footer/>
      <Footer2/>
    </div>
  )
}
