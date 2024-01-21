import { Timeline } from "rsuite";
import TextImageIcon from "@rsuite/icons/TextImage";

const EducationList = () => (
  <div>
    <Timeline className="custom-timeline" justify="center">
      <Timeline.Item dot={<TextImageIcon />}>
        <h5>10th</h5>
        <p>BSEB, Patna</p>
        <p>2016-2017</p>
      </Timeline.Item>
      <Timeline.Item dot={<TextImageIcon />}>
        <h5>12th</h5>
        <p>BSEB, Patna</p>
        <p>2018-2019</p>
      </Timeline.Item>
      <Timeline.Item dot={<TextImageIcon />}>
        <h5>B.Tech in CSE</h5>
        <p>Maharishi Dayanand University, Rohtak</p>
        <p>2019-2023</p>
        <p>CGPA: 7+</p>
      </Timeline.Item>
      {/* <Timeline.Item dot={<TextImageIcon />}>
        <h4>Full Stack Development</h4>
        <p>Duact IT Training</p>
        <p>OCT 2023 - Present</p>
      </Timeline.Item> */}
    </Timeline>
  </div>
);

export default EducationList;
