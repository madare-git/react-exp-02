import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// コンソールで2回表示されるのが嫌だったら、StrictModeを外す（<StrictMode>と</StrictMode>を消す）
// StrictModeは、開発モードでのみ動作し、本番ビルドには影響しない