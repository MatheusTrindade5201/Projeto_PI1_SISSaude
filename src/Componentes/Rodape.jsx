function Rodape({ setNumber }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        background: "#808080",
      }}
    >
      <div>
        <button
          type="submit"
          className="botoesmenu"
          onClick={() => setNumber(0)}
          color="#f194ff"
        ></button>
        <br />
        <label>1</label>
      </div>
      <div>
        <button
          type="submit"
          className="botoesmenu"
          onClick={() => setNumber(1)}
        ></button>
        <br />
        <label>2</label>
      </div>
      <div>
        <button
          type="submit"
          className="botoesmenu"
          onClick={() => setNumber(2)}
        ></button>
        <br />
        <label>3</label>
      </div>
      <div>
        <button
          type="submit"
          className="botoesmenu"
          onClick={() => setNumber(3)}
        ></button>
        <br />
        <label>4</label>
      </div>
    </div>
  );
}

export default Rodape;
