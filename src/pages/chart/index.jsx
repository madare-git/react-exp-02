// rafce リアクトの雛形が作れるショートカットです🤗

import React from "react";
// cssを紐づける
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import ChartBar from "../../components/ChartBar";

const Chart = () => {
  return (
    <>
      <Header />
      <div className={styles.chart}>
        {/*  */}
        <SideBar />
        <ChartBar />
        {/*  */}
      </div>
    </>
  );
};

export default Chart;
