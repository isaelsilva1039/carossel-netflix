import logo from './logo.svg';
import './App.css';
import NetflixCarousel from './components/carosel';
import image1 from './assets/1.jpg'
import image2 from './assets/2.png'
import image3 from './assets/3.gif'
import image4 from './assets/4.jpg'
import image5 from './assets/5.gif'

import image6 from './assets/6.png'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'


function App() {
  
  const itens = {
    Acao: [
      { image: image1, alt: 'Descrição Ação 1' },
      { image: image2, alt: 'Descrição Ação 2' },
      { image: image3, alt: 'Descrição Ação 3' },
      { image: image4, alt: 'Descrição Ação 3' },
      { image: image5, alt: 'Descrição Ação 3' },
      { image: image6, alt: 'Descrição Ação 3' },
      { image: image7, alt: 'Descrição Ação 3' },
      { image: image8, alt: 'Descrição Ação 3' },
    ],
    Comedia: [
      { image: image1, alt: 'Descrição Ação 1' },
      { image: image2, alt: 'Descrição Ação 2' },
      { image: image3, alt: 'Descrição Ação 3' },
      { image: image4, alt: 'Descrição Ação 3' },
      { image: image5, alt: 'Descrição Ação 3' },
      { image: image6, alt: 'Descrição Ação 3' },
      { image: image7, alt: 'Descrição Ação 3' },
      { image: image8, alt: 'Descrição Ação 3' },
      // ... mais itens
    ],
    Drama: [
      { image: image1, alt: 'Descrição Ação 1' },
      { image: image2, alt: 'Descrição Ação 2' },
      { image: image3, alt: 'Descrição Ação 3' },
      { image: image4, alt: 'Descrição Ação 3' },
      { image: image5, alt: 'Descrição Ação 3' },
      { image: image6, alt: 'Descrição Ação 3' },
      { image: image7, alt: 'Descrição Ação 3' },
      { image: image8, alt: 'Descrição Ação 3' },
    ],
  };
  
  return (
    <div className="App">

        <NetflixCarousel  items={itens} />
    </div>
  );
}

export default App;
