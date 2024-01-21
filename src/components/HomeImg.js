import Avatar from "./img/satya.png";

const HomeImg = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={Avatar}
      alt="Avatar"
      height="300"
      width="200"
      style={{
        maxWidth: "100%",
        height: "auto",
        border: "none",
        borderTopLeftRadius: "90px",
        borderBottomRightRadius: "90px",
        borderInline: "2px solid darksalmon",
        backgroundColor: "darksalmon",
      }}
    />
  </div>
);
export default HomeImg;
