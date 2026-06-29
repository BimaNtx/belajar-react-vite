const Biodata = ({ nama, jurusan, hobi }) => {
  return (
    <div style={{ border: "1px solid white", padding: "10px", margin: "10px", borderRadius: "8px" }}>
    <h2>Nama: {nama}</h2>
    <p>Jurusan: {jurusan}</p>
    <p>Fokus: {hobi}</p>
    </div>
  );
};

export default Biodata