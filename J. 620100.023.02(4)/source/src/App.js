import "./App.css";
import React from "react";

function App() {
  // const [inputArr, setInputArr] = useState(null);
  // const [nilai, setNilai] = useState([]);

  let nilai = [];
  let lop = true;
  while (lop) {
    const angka = parseInt(
      prompt(`1. Input angka
    2. Tampilkan Hasil
    3. Selesai
    4. Hapus angka sebelumnya`)
    );
    if (angka === 1) {
      const params = parseInt(
        prompt("Masukan jumlah angka yang akan di input")
      );
      if (params === null || params === "") {
        alert("Masukan angka yang valid");
      }
      while (nilai.length !== params) {
        const inputArr = prompt(`
        jumlah angka yang akan di input : ${params}
      Masukan angka random 
      ${
        nilai === []
          ? null
          : nilai.map((data, index) => `Angka ke ${index + 1} : ${data}`)
      }`);
        if (inputArr === "" || inputArr === null) {
          alert("Silahkan masukan angka");
        } else {
          nilai.push(inputArr);
        }
      }
    } else if (angka === 2) {
      nilai.sort();
      alert(nilai.map((data, index) => `Angka ke ${index + 1} : ${data}`));
    } else if (angka === 3) {
      alert("Selesai");
      lop = false;
    } else if (angka === 4) {
      nilai = [];
      alert("Berhasil dihapus, Silahkan input ulang ");
    } else {
      alert("Anda memasukan angka yang salah");
    }
  }

  return (
    <div className="App">
      <h1>Serkom Anwar Ramdhani</h1>
    </div>
  );
}

export default App;
