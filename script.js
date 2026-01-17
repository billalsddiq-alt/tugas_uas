const maxKouta = 50;
let infopeserta = 0;
let datapeserta = [];

const form = document.getElementById("form");
const hero = document.getElementById("daftar");

const jumlahpeserta = document.createElement("h5");
jumlahpeserta.textContent = "peserta yang daftar: 0";
jumlahpeserta.style.display = "none"; 
hero.appendChild(jumlahpeserta);

const daftarpeserta = document.createElement("ul");
hero.appendChild(daftarpeserta);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("no").value.trim();

  if (nama === "" || alamat === "" || email === "" || hp === "") {
    Swal.fire({
  title: "kenapa ga kamu isi?",
  text: "katanya mau pinter 😑",
  icon: "question"
});
    return;
  }

  if (!email.includes("@")) {
    Swal.fire({
  icon: "error",
  title: "email kamu salah",
  text: "isi email yang bener bro!",
}); 
    return;
  }

  if (!/^\d+$/.test(hp)) {
    Swal.fire({
  icon: "error",
  title: "jangan ngasal isinya ",
  text: "isi nomor yang bener!  😑",
});
    return;
  }

  if (infopeserta >= maxKouta) {
        Swal.fire({
  icon: "error",
  title: "yahhhh sayang banget kouta sudah penuh",
  text: "lagian bukan dari kemaren daftarnya 😂😂",
});
    return;
  }

  infopeserta++;
  datapeserta.push({ nama, alamat, email, hp });

  jumlahpeserta.style.display = "block";
  jumlahpeserta.textContent = `peserta yang daftar: ${infopeserta}`;

 
  
Swal.fire({
  icon: "success",
  title: "mantap sudah daftar",
  text: "karena kamu sudah daftar bolehkah saya pinjam seratus 😅😅",
});

jumlahpeserta.remove();
  form.reset();
}); 