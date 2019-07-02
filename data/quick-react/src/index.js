// 1. React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';
// 2. アプリ固有のファイルをインポート
import './index.css';
import App from './App';
import MyHello from './components/MyHello';
import MyAttrMulti from './components/MyAttrMulti';
import MyHelloContent from './components/MyHelloContent';
import MyBook from './MyBook/MyBook';
// 3. キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

// 4. Appコンポーネントを実⾏
ReactDOM.render(<App/>, document.getElementById('root'));
setInterval(() => {
  ReactDOM.render(<div>現在時刻は、{(new Date()).toLocaleString()}です。</div>, document.getElementById('time'));
}, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// 5. サービスを有効化
serviceWorker.unregister();

ReactDOM.render(
// 1. MyHelloコンポーネントにプロパティを引き渡す
<MyHello name="boy"/>, document.getElementById('MyHello'));

const data = {
  name: '⼭⽥権左衛⾨',
  age: 18,
  sex: '男'
};

ReactDOM.render(<MyAttrMulti {...data}/>, document.getElementById('MyAttrMulti'));

ReactDOM.render(<MyHelloContent>
  <b>⼭⽥</b>
</MyHelloContent>, document.getElementById('MyHelloContent'));

const book = {
  isbn: 'WGS-JST-001',
  title: '速習 webpack',
  price: 454,
  published: 'WINGSプロジェクト'
};

ReactDOM.render(<MyBook info={book}/>, document.getElementById('MyBook'));
