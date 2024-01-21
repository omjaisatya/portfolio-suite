import { Popover, Whisper, Button } from "rsuite";

const PopoverBtn = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        Contact me Through Email
      </Popover>
    }
  >
    <Button>Hire Me!</Button>
  </Whisper>
);

export default PopoverBtn;
