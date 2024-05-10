import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";

const App = () => {
  return (
    //main section for website
    <main className="bg-black">
      <Navbar />
      <Highlights />
      <Hero />

    </main>
  )
}
 
export default App
