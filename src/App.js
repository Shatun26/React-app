import Header from './components/Header/Header';
import Profile from './components/Main/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import './Styles/Style.css';
import './Styles/Normolize.css';
import './Prepare/Fonts/caviar.css';
import Dialogs from './components/Main/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
