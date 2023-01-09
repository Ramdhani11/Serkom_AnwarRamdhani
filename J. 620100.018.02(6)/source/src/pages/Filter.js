import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { datas } from "../data/Data";

const Filter = () => {
  const params = useParams();
  const [modal, setModal] = useState(true);
  const [pegawai, setPegawai] = useState({});
  const [gajiPokok, setGajiPokok] = useState(0);
  const [lembur, setLembur] = useState(0);
  const [pelanggan, setPelanggan] = useState(0);
  const [persentase, setPersentase] = useState(0);
  const [hasil, setHasil] = useState({
    bonus: 0,
    total: 0,
  });
  //
  const ID = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const date = new Date();

  useEffect(() => {
    const result = datas.find((e) => e.nip === params.id);
    setPegawai(result);
  }, [params.id]);
  useEffect(() => {
    if (pegawai.status === "Satpam") {
      setGajiPokok(2300000);
    } else if (pegawai.status === "Sales") {
      setGajiPokok(3000000);
    } else if (pegawai.status === "Administrasi") {
      setGajiPokok(4000000);
    } else {
      setGajiPokok(6000000);
    }
  }, [pegawai.status]);

  // SubmitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    if (pegawai.status === "Satpam") {
      const LemburJam = lembur * 20000;
      setHasil({ bonus: LemburJam });
      setHasil({ total: gajiPokok + LemburJam });
      // hasil.bonus = LemburJam;
      // hasil.total = gajiPokok + LemburJam;
      setModal(false);
    } else if (pegawai.status === "Sales") {
      const LemburJam = pelanggan * 50000;
      hasil.bonus = LemburJam;
      hasil.total = gajiPokok + LemburJam;
      setModal(false);
    } else if (pegawai.status === "Administrasi") {
      const compare = date.getFullYear() - pegawai.tahun;
      if (compare >= 5) {
        hasil.bonus = gajiPokok * 0.03;
      } else if (compare >= 3) {
        hasil.bonus = gajiPokok * 0.01;
      } else {
        hasil.bonus = 0;
      }
      hasil.total = gajiPokok + hasil.bonus;
      setModal(false);
    } else if (pegawai.status === "Manager") {
      if (persentase >= 10) {
        hasil.bonus = gajiPokok * 0.1;
      } else if (persentase >= 6) {
        hasil.bonus = gajiPokok * 0.05;
      } else if (persentase >= 1) {
        hasil.bonus = gajiPokok * 0.02;
      } else {
        hasil.bonus = 0;
      }
      hasil.total = gajiPokok + hasil.bonus;
      setModal(false);
    }
  };

  // Statement Input
  const Statement = () => {
    if (pegawai.status === "Satpam") {
      return (
        <>
          <p>cth : 10 = 10jam</p>
          <input
            type="number"
            placeholder="Masukan jumlah lembur"
            value={lembur === 0 ? null : lembur}
            onChange={(e) => setLembur(e.target.value)}
            required
          />
          <button type="submit">Liat Slip</button>
        </>
      );
    } else if (pegawai.status === "Sales") {
      return (
        <>
          <p>cth : 10 = 10 pelanggan</p>
          <input
            type="number"
            placeholder="Masukan jumlah pelanggan"
            value={pelanggan === 0 ? null : pelanggan}
            onChange={(e) => setPelanggan(e.target.value)}
            required
          />
          <button type="submit">Liat Slip</button>
        </>
      );
    } else if (pegawai.status === "Manager") {
      return (
        <>
          <p>cth : 10 = 10% </p>
          <input
            type="number"
            placeholder="Masukan ratio presentasi"
            value={persentase === 0 ? null : persentase}
            onChange={(e) => setPersentase(e.target.value)}
            required
          />
          <button type="submit">Liat Slip</button>
        </>
      );
    } else {
      return <button onClick={submitHandler}>Liat Slip</button>;
    }
  };

  return (
    <>
      {modal ? (
        <div style={{ width: 400, height: 500, border: "1px solid #000" }}>
          <h3 style={{ textAlign: "center" }}>PT. Argo Industri</h3>
          <hr />
          <table style={{ textAlign: "left" }}>
            <tbody>
              <tr>
                <th>Nama</th>
                <td>:</td>
                <td>{pegawai.nama}</td>
              </tr>
              <tr>
                <th>NIP</th>
                <td>:</td>
                <td>{pegawai.nip}</td>
              </tr>
              <tr>
                <th>Jabatan</th>
                <td>:</td>
                <td>{pegawai.status}</td>
              </tr>
              <tr>
                <th>Tahun Masuk</th>
                <td>:</td>
                <td>{pegawai.tahun}</td>
              </tr>
              <tr>
                <th>Gaji Pokok</th>
                <td>:</td>
                <td>{ID.format(gajiPokok)}</td>
              </tr>
            </tbody>
          </table>
          <form onSubmit={submitHandler}>{Statement()}</form>
        </div>
      ) : (
        <div
          style={{
            width: 400,
            height: 500,
            border: "1px solid #000",
            position: "relative",
          }}
        >
          <h3 style={{ textAlign: "center" }}>PT. Argo Industri</h3>
          <hr />
          <table style={{ textAlign: "left" }}>
            <tbody>
              <tr>
                <th>Nama</th>
                <td>:</td>
                <td>{pegawai.nama}</td>
              </tr>
              <tr>
                <th>NIP</th>
                <td>:</td>
                <td>{pegawai.nip}</td>
              </tr>
              <tr>
                <th>Jabatan</th>
                <td>:</td>
                <td>{pegawai.status}</td>
              </tr>
              <tr>
                <th>Gaji Pokok</th>
                <td>:</td>
                <td>{ID.format(gajiPokok)}</td>
              </tr>
              <tr>
                <th>Lembur/Bonus/Tunjangan</th>
                <td>:</td>
                <td>{ID.format(hasil.total - gajiPokok)}</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>:</td>
                <td>{ID.format(hasil.total)}</td>
              </tr>
            </tbody>
          </table>
          <Link
            style={{ position: "absolute", bottom: 10, right: 10 }}
            to={"/"}
          >
            Kembali
          </Link>
        </div>
      )}
    </>
  );
};

export default Filter;
