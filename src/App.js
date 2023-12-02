import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cheader from './Cheader';
import Footer from './Footer';
import Home from './Home';
import SingleView from './SingleView';

function App() {
  return (
    <div>
      {/* BRDstep3 */}
      <Cheader></Cheader>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='contactView/:id' element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
