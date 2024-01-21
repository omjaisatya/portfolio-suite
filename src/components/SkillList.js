import { Timeline, Grid, Row, Col } from "rsuite";
import { Progress } from "rsuite";

const SkilsList = (props) => (
  <Timeline {...props}>
    <Timeline.Item>
      HTML/CSS <Progress.Line percent={100} status="success" />
    </Timeline.Item>
    <Timeline.Item>
      JavaScript{" "}
      <Progress.Line
        percent={80}
        // showInfo={false}
        // strokeColor="darksalmon"
        status="active"
      />{" "}
    </Timeline.Item>
    <Timeline.Item>
      Bootstrap <Progress.Line percent={100} status="success" />{" "}
    </Timeline.Item>
    <Timeline.Item>
      ReactJs <Progress.Line percent={50} status="active" />
    </Timeline.Item>
    <Timeline.Item>
      TypeScript(Basics) <Progress.Line percent={30} status="active" />
    </Timeline.Item>
    <Timeline.Item>Updating...</Timeline.Item>
  </Timeline>
);

const SkillList = () => (
  <Grid fluid>
    <Row>
      <Col xs={24}>
        <SkilsList isItemActive={Timeline.ACTIVE_LAST} />
      </Col>
    </Row>
  </Grid>
);

export default SkillList;
