import PopoverBtn from "./PopoverBtn";

const HomeDescr = () => (
  <div
    style={{
      textAlign: "center",
      padding: "10px",
    }}
  >
    <h3>
      Hello I&apos;m <br />
      <span
        // className="tracking-in-expand"
        style={{ color: "darksalmon", fontFamily: "cursive" }}
      >
        Satya Prakash
      </span>
    </h3>
    <p>
      I&apos;m a <b style={{ color: "khaki" }}>Front End Developer</b>{" "}
    </p>
    <p>
      I am graduate student of Computer Science and Engineering from Maharshi
      Dayanand University, Rohtak. I am passionate about Computer Science and I
      love exploring new technologies. I am a quick learner and a team player.
    </p>
    <PopoverBtn />
  </div>
);

export default HomeDescr;
