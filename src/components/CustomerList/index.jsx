import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./style.module.scss";

// MEMO .envファイルを作成し以下のようにします↓
// VITE_GOOGLE_SHEETS_API_KEY = あなたのAPIキー;
// VITE_GOOGLE_SHEETS_SHEET_ID = あなたのスプレッドシートID;
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_ID; //"シートIDが入ります";
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY; //"apiのキーが入ります";
const SHEET_NAME = "テスト"; //ここは.envの演習で置き換えを行います🤗
const RANGE = "シート1!A2:D";

const CustomerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //スプレッドシートを作成し、その次に共有を押して、リンクを知っている人に設定をする🤗
      // 例) https://docs.google.com/spreadsheets/d/xxxx（授業で説明しますがここがシートIDです！これを使います！）/edit?usp=sharing
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      const res = await fetch(url);
      const json = await res.json();

      if (json.values) {
        const mapped = json.values.map((row, index) => ({
          id: Number(row[0]),
          title: row[1],
          text: row[2],
          tel: row[3],
        }));
        setData(mapped);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.customerList}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">エリア</TableCell>
              <TableCell align="right">登録日</TableCell>
              <TableCell align="right">電話番号</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.text}</TableCell>
                <TableCell align="right">{row.tel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerList;
