import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from './reducks/users/actions';

function App() {
  // useDispatchは必ず実行した結果を変数に代入してから使う
  // そうしないとエラーになる
  const dispatch = useDispatch();

  // この書き方をすることで現在のstoreのstateが丸々と変数に代入される
  const selector = useSelector((state) => state);

  console.log(selector.users);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* dispatchの中にActionを指定することでActionを実行できる */}
        <button onClick={() => dispatch(signInAction({ uid: '00001', username: 'naohack' }))} >SignIn</button>
      </header>
    </div>
  );
}

export default App;
