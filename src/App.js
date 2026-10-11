import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')] bg-fixed bg-cover min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>© 2026 Yvonne Marie Rodriguez | Cavite State University – Tanza Campus</p>
      </footer>
    </div>
  );
}

export default App;
