const InputField = (props) => {
  const { handleChange, label, name, type, value } = props;
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ color: "grey", fontSize: "13px" }} htmlFor={name}>
        {label}
      </label>
      <input
        style={{
          borderBottom: "5px",
          outline: "none",
          border: "1px solid darksalmon",
          color: "black",
          width: "100%",
          height: "30px",
          paddingRight: "10px",
          borderRadius: "10px",
        }}
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
      />
    </div>
  );
};

export default InputField;
