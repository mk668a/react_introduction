// 4. Reactの基本ライブラリをインポート
import React, {Component} from 'react';
// 3. ロゴ画像／スタイルシートをインポート
import logo from './logo.svg';
import './App.css';

// 1. Appコンポーネントを定義
class App extends Component {
  // 2.描画する内容を定義
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <h1 className="App-title">Reactへようこそ！</h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div id="time"></div>
        <div id="MyHello"></div>
        <div id="MyAttrMulti"></div>
        <div id="MyHelloContent"></div>
        <div id="MyBook"></div>
      </header>
    </div>);
  }
}
// 5. Appをエクスポート
export default App;
