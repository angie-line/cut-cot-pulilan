import cutcot from '../cut-cot.png';
import pulilan from '../pulilan.png';
import '../App.css';


const Header = () => {
  return (
    <header className="App-header">
        <img src={cutcot} className="App-logo" alt="logo" />
        <div className="title">
          <h1>
            PAMAHALAANG BARANGAY NG CUT-COT<br/>
          </h1>
          <h5>
            PULILAN, BULACAN, PHILIPPINES 3005
          </h5>
        </div>        
        <img src={pulilan} className="App-logo" alt="logo" />
      </header>

  );
};

export default Header;