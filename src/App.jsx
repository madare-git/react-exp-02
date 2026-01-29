// UsestateをReactからインポートする
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News/index.jsx'
import CalendarItem from './components/CalendarItem/index.jsx'
import ChartBar from './components/ChartBar/index.jsx'
import CustomerList from './components/CustomerList/index.jsx'
import Header from './layout/Header/index.jsx'
import SideBar from './layout/SideBar/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Chart from './pages/chart/index.jsx'
import NotFound from './pages/notfound/index.jsx' 
import Customer from './pages/customer/index.jsx'
import Orders from "./pages/orders";

function App() {
    
  // useStateを使って、stateを定義する
  // set+大文字から始まる関数名がstateを更新する関数になる
  // 画面に表示されるのは、useStateの引数に渡した初期値
  
  // inputが２個あるので、useStateも２個用意する
  const [name, setName] = useState('名前入力');
  const [email, setEmail] = useState('メールアドレス入力'); 
  const [data, setData] = useState([]); // APIから取得したデータを入れるためのstateを用意
  // バックエンドからデータを取得して表示するときは配列で扱うことが多いので、初期値は空配列にしておく（[]が必要）

  // イベント処理＝クリックしたらXXする、マウスを動かしたらXXする、など
  const handleNameChange = (e) => {
    // 処理を書きます
    // eはイベントオブジェクト。イベントに関する情報が入っている
    // 一般的にhandle+イベント名で関数名をつけることが多い。実際の命名時はGemini先生に聞いてみると良いかも
    setName(e.target.value);
    // e.target.valueで、inputに入力された値を取得できる
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


  useEffect(() => {
    // この中に書きます。
    console.log('起動しました！！！');

    const fetchData = async () => {
      try {
        const response = await fetch("./mock/orders.json");
        console.log(response, "response");
        //ここでjsの形に変換するjson()を行なっています🤗
        // APIからとってきたデータは、別の言語なのでjson()でJSに変換するのが必須
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      } catch (error) {}

      // おまじないの処理の終わり、下は消さない
    };

    //fetchData関数を実行する
    fetchData();
    
    
    //スプレッドシートAPIの記述を書いて、データを読み込む 
    // この下は消さない。
  }, []);

  //useEffectの前にコンソールログを書くと、最初に一回だけ実行される
  console.log('順番の確認');


  return (
    <>
      {/*  */}
      {/* <h1>データを表示する方法</h1>
       {data.map((item) => (
        <div>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userid}</p>
        </div>
      ))} */}


      <BrowserRouter>
        {/* <Header /> */}
        {/* <SideBar /> */}
      
        <Routes>  
          {/* ルーティングの設定を書く場所 */}
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/customer" element={<Customer />} /> 
          <Route path="/orders" element={<Orders />} />
        </Routes>
      
        {/* <CalendarItem /> */}
        {/* <News /> */}
        {/* <ChartBar />       */}

        {/* <div>
        <p>名前が入ります</p>
        <input 
          type="text" 
          placeholder='名前を入力してください' 
          value={name}
          onChange={handleNameChange} 
        /> 
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input 
          type="text" 
          placeholder='メールアドレスを入力してください'
          value={email}
          onChange={handleEmailChange}
        />
      </div> */}

      </BrowserRouter>

      {/*  */}
    </>
  );
}

export default App
