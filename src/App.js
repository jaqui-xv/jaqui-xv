import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Date from './components/Date';
import Location from './components/Location';
import Gifts from './components/Gifts';
import DressCode from './components/DressCode';
import Assistance from './components/Assistance';
import Footer from './components/Footer';
import Message from './components/Message';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Date></Date>
      <Location></Location>
      <Gifts></Gifts>
      <DressCode></DressCode>
      <Assistance></Assistance>
      <Message></Message>
      <Footer></Footer>
    </>
  );
}

export default App;
