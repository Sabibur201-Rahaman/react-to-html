import Description from "./component/Description";
import Menu from "./component/Menu";
import StartHeader from "./component/StartHeader";
import Speakers from "./component/Speakers";
import Tickets from "./component/Tickets";
import Schedule from "./component/Schedule";
import Footer from "./component/Footer";
function App() {
  return (
  <main>
    <section className='container'>
  <Menu/>
  <StartHeader/>
  </section>
  <Description/>
  <Speakers/>
  <Tickets/>
  <Schedule/>
  <Footer/>
  </main>
  )
}
export default App;
