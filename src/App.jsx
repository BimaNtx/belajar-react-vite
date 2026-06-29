import "./App.css";
import Biodata from "./components/Biodata";

const App = () => {
  const dataTim = [
    { id: 1, nama: "Bima Ananta", jurusan: "Rekayasa Perangkat Lunak", hobi: "Frontend Web Development" },
    { id: 2, nama: "Abiyan", jurusan: "Rekayasa Perangkat Lunak", hobi: "Backend & Database" },
    { id: 3, nama: "Tama", jurusan: "Rekayasa Perangkat Lunak", hobi: "UI/UX Design" },
    { id: 4, nama: "Farell", jurusan: "Rekayasa Perangkat Lunak", hobi: "Software Testing" }
  ];
  return (
    <div>
      <h1>Daftar Anggota Tim</h1>
      {dataTim.map((anggota) => (
        <Biodata
        key={anggota.id}
        nama={anggota.nama}
        jurusan={anggota.jurusan}
        hobi={anggota.hobi}
        />
      ))}
    </div>
  );
};

export default App;
