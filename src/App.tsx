import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import IdentityGenerator from './components/IdentityGenerator';
import Manifesto from './components/Manifesto';

function App() {
  return (
    <>
      <div className="noise-overlay pointer-events-none z-[9999]" />
      <Navbar />
      <Hero />
      <div className="bg-ivory">
        <ProblemSolution />
        <Features />
        <IdentityGenerator />
      </div>
      <Manifesto />
    </>
  );
}

export default App;
