import { lazy, Suspense,useState} from 'react';
// import GridLoader from 'react-spinners/GridLoader';
import Demoform from './components/demoform';
// import Navbar from './components/navbar';
// import Hero from './components/hero';

// Use React.lazy for dynamic imports
const CenterModeSlickCarousel = lazy(() => import('./components/slider'));
const Midsec1 = lazy(() => import('./components/midsec-1'));
const Hero = lazy(() => import('./components/animatehero'));
const Navbar = lazy(() => import('./components/navbar'));
const Midsec2 = lazy(() => import('./components/midsec-2'));
const Footer1 = lazy(() => import('./components/footer-1'));
const Footer2 = lazy(() => import('./components/footer-2'));


function App() {
  const[isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  
  return (
    <div>
      <Suspense fallback={<div className="loader absolute left-1/2 top-1/2  "></div>}>
        <Navbar openModal={openModal} />
        <Hero />
        <Midsec2 />
        <Midsec1 />
        <CenterModeSlickCarousel />
        <Footer1 />
        <Footer2 />
        {isModalVisible && <Demoform onClose={closeModal} />}
      </Suspense>
    </div>
  );
}

export default App;
