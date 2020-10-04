import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [categories] = useState([
    { name: 'About Me', href: 'about-me' },
    { name: 'Portfolio', href: 'portfolio'},
    { name: 'Contact', href: 'contact' },
    { name: 'Resume' , href: 'resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () =>{
    switch (currentCategory.name) {
      case 'Portfolio' : 
        return <Portfolio />;
      case 'Contact' : 
        return <Contact />;
      case 'Resume' : 
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <section className="jumb">
        <h2 className="card">
          Quality website development!
        </h2>
      </section>
      <main>
        <div>{renderPage()}</div>
      </main>
   </div>
    
  );
}

export default App;
