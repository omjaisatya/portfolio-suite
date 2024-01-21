const TextareaField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div>
      <label style={{ color: "grey", fontSize: "13px" }} htmlFor={name}>
        {label}
      </label>
      <textarea
        style={{
          borderBottom: "5px",
          outline: "none",
          border: "1px solid darksalmon",
          color: "black",
          width: "100%",
          height: "90px",
          paddingRight: "10px",
          borderRadius: "10px",
          // resize: "none",
          maxWidth: "400px",
          maxHeight: "200px",
          minBlockSize: "90px",
        }}
        onChange={handleChange}
        name={name}
        rows="4"
        value={value}
      ></textarea>
    </div>
  );
};

export default TextareaField;
