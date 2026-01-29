// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/*  */}
      <ul className={styles.menu}>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/customer">顧客リスト</Link>
        </li>
        <li>
          <Link to="/orders">注文管理</Link>
        </li>
        <li>
          <Link to="/chart">チャート</Link>
        </li>
        <li>
          <Link to="/logout">ログアウト</Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
};

export default SideBar;
