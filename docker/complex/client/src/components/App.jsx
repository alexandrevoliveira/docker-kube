import logo from '../logo.svg';
import '../styles/App.css';
import { Fib } from './Fib'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Fibonacci</h1>
          <div className='pages'>
            <a href='/'>Home</a>
            <a href='/otherpage'>Other Page</a>
          </div>
        </div>
      </header>
      <div className='App-body'>
        <div className="body-content">
          <Fib />
        </div>
      </div>
    </div>
  );
}
