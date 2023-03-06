import {Routes,Route,BrowserRouter} from 'react-router-dom'

import { Home } from './pages/home/Home';
import { List } from './pages/list/List';
import { SingleHotel } from './pages/singlehotel/SingleHotel';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
          
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/roomDetails' element={<SingleHotel/>}></Route>
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
