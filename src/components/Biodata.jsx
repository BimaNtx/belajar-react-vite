import { useState } from "react";

const Biodata = ({nama, jurusan, hobi}) => {
  const [jumlahLike, setJumlahLike] = useState(0);

  return (
    <div style={{ border: "1px solid white", padding: "10px", margin: "10px", borderRadius: "10px"}}>
      <h2>Nama: {nama}</h2>
      <p>Jurusan: {jurusan}</p>
      <p>Hobi: {hobi}</p>

      <button onClick={() => setJumlahLike(jumlahLike + 1)}
        style={{cursor: "pointer", padding: "5px 10px", marginTop: "10px" }}
        >
          Sukai Profil ({jumlahLike})
        </button>

        <button onClick={() => setJumlahLike(0)}
          style={{cursor: "pointer", padding: "5px 10px", marginBottom: "10px"}}>
            Reset
          </button>
    </div>
  );
};

export default Biodata;