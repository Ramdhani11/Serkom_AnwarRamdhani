const lop = true;
while (lop) {
  const angka = prompt(`1. Input angka
  2. Tampil hasil pengurutan
  3. Selesai`);
  const hasil = [];
  if (angka == 1) {
    const angka2 = prompt("Masukan jumlah angka yang akan di input");
    while (hasil.length <= angka2) {
      const inputArr = prompt(`
      jumlah angka yang akan di input : ${angka2}
    Masukan angka random`);
      while (inputArr == null || inputArr == "") {
        const hasila = prompt(`
        jumlah angka yang akan di input : ${angka2}
      Masukan angka random
      ${
        hasil == []
          ? null
          : hasil.map((data, index) => `Angka ${index + 1} : ${data}`)
      }`);
        inputArr = hasila;
        hasil.push(hasila);
      }
    }
    hasil.sort();
    alert(`Hasil Pengurutan Angka 
    Angka : ${hasil.map((data) => data)}`);
  } else if (angka == 2) {
    hasil.sort();
    alert(`Hasil Pengurutan Angka
    Angka : ${hasil.map((data) => data)}`);
    // alert(final.length);
  } else if (angka == 3) {
    alert("Selesai");
    lop = false;
  } else {
    alert("Anda memasukan angka yang salah");
  }
}
