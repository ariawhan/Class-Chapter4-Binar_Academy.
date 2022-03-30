// 1. bikin class Vehicle (Kendaraan)
// attribut nya (constructor) : jenis kendaraan (roda berapa 2/4 atau lainnya), negara produksi,
// ada method info yang melakukan print = 'Jenis Kendaraan roda 4 dari negara Jerman';

// 2. bikin child class (Mobil) dari Kendaraan, inherit attribut jenis kendaraan dan negara produksi dari super/parent class nya
// attribut baru di child class ini yaitu Merek Kendaraan, Harga Kendaraan dan Persen Pajak
// 3. ada method totalPrice yang melakukan proses menambah harga normal dengan persen pajak, yang RETURN hasil penjumlahan tersebut
// 4. overidding method info dari super/parent class (panggil instance method info dari super class = super.methodName() dan di overriding method info di child class ini ada tambahan =>
// print = 'Kendaraan ini nama mereknya Mercedes dengan total harga Rp. 880.000.000'
// 5. buat 2 instance (1 dari parent class(Vehicle), 1 dari child class aja(Mobil))
// contoh instance
// 1. const kendaraan = new Vehicle(2, 'Jepang')
// kendaraan.info()
// 2. const mobil = new Mobil(4, 'Jerman', 'Mercedes', 800000000, 10);
// mobil.info()

/** 
    NOTES
    rumus total price setelah di tambah pajak utk method totalPrice, bisa kalian googling sendiri yah.
*/

//Class Super
class Vehicle {
  constructor(rodaKendaraan, negaraProduksi) {
    this.rodaKendaraan = rodaKendaraan;
    this.negaraProduksi = negaraProduksi;
  }
  // Method info
  info() {
    console.log(
      "Janis Kendaraan Roda " +
        this.rodaKendaraan +
        " dari negara " +
        this.negaraProduksi
    );
  }
}

// Child Class From Vehicle
class Car extends Vehicle {
  constructor(
    rodaKendaraan,
    negaraProduksi,
    merekKendaraan,
    hargaKendaraan,
    pajak
  ) {
    super(rodaKendaraan, negaraProduksi);
    this.merekKendaraan = merekKendaraan;
    this.hargaKendaraan = hargaKendaraan;
    this.pajak = pajak;
  }
}
