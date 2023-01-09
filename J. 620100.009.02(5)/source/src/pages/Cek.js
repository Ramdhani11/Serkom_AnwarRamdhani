import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { datas } from "../data/Data";

const Cek = () => {
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const submitdandler = () => {
    const cekNama = datas.map((data) => data.nama);
    const cekNip = datas.map((data) => data.nip);
    if (cekNama.includes(nama) && cekNip.includes(nip)) {
      // const found = datas.find((e) => e.nip === nip);
      navigate("/" + nip);
    } else {
      alert("Nip Atau Nama tidak terdaftar");
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        widtd: "300px",
        position: "relative",
      }}
    >
      <h1>PT. Argo Industri</h1>
      <input
        type="Number"
        placeholder="Masukan NIP"
        value={nip}
        onChange={(e) => setNip(e.target.value)}
      />
      <input
        type="text"
        placeholder="Masukan Nama "
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <div
        style={{ position: "absolute", right: -20, top: 30, cursor: "pointer" }}
        onMouseEnter={() => setModal(!modal)}
        onMouseOut={() => setModal(!modal)}
      >
        ?
      </div>
      {modal ? (
        <div
          style={{
            position: "absolute",
            border: "1px solid #ccc",
            padding: 10,
            right: -180,
            top: 30,
          }}
        >
          {datas.map((data) => {
            const { nama, nip, status } = data;
            return (
              <table style={{ fontSize: 12, borderBottom: "1px solid #ccc" }}>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{nama}</td>
                  </tr>
                  <tr>
                    <td>Nip</td>
                    <td>:</td>
                    <td>{nip}</td>
                  </tr>
                  <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td>{status}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      ) : null}

      <button onClick={submitdandler}>Cek</button>
    </form>
  );
};

export default Cek;
