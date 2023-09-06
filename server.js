const express = require("express");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views")));

const db = mysql.createConnection({
  host: "localhost",
  database: "wedding",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("DATABASE CONNECT");

  const sql = "SELECT * FROM comment";

  // untuk get data
  app.get("/", (req, res) => {
    db.query(sql, (err, result) => {
      const comments = JSON.parse(JSON.stringify(result));
      res.render("index", { comments: comments, title: "SEMOGA BERHASIL" });
    });
  });

  // untuk insert data
  app.post("/tambah", (req, res) => {
    const namaPengirim = req.body.nama_pengirim; // Menangkap nama_pengirim dari form
    const pesan = req.body.pesan;
    const insertSql = `INSERT INTO comment(nama_pengirim, pesan) VALUES ('${namaPengirim}', '${pesan}');`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

// app.listen(8000, () => {
//     console.log("server ready....")
// })
const PORT = 8000;
app.listen(8000);

console.log(`node js running at ${PORT}`);

// ----------------------------------------------------

