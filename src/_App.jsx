// UsestateをReactからインポートする
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useStateを使って、stateを定義する
  // set+大文字から始まる関数名がstateを更新する関数になる
  // 画面に表示されるのは、useStateの引数に渡した初期値
  
  // inputが２個あるので、useStateも２個用意する
  const [name, setName] = useState('名前入力');
  const [email, setEmail] = useState('メールアドレス入力'); 

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
    // この下は消さない。
  }, []);

  //useEffectの前にコンソールログを書くと、最初に一回だけ実行される
  console.log('順番の確認');


  return (
    <>
      {/*  */}
      <div>
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
      </div>

      {/*  */}
    </>
  );
}

export default App
