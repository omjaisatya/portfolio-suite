import React from "react";
import { FlexboxGrid } from "rsuite";
import ProjectDetailsOne, {
  ProjectDetailsFive,
  ProjectDetailsFour,
  ProjectDetailsThree,
  ProjectDetailsTwo,
} from "./ProjectDetails";
import ProjectImagesOne, {
  DefaultImages,
  ProjectImagesThree,
  ProjectImagesTwo,
} from "./ProjectImages";

function ProjectListsOne() {
  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <ProjectDetailsOne />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <ProjectImagesOne />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export function ProjectListsTwo() {
  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <ProjectDetailsTwo />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <ProjectImagesTwo />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export function ProjectListsThree() {
  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <ProjectDetailsThree />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <ProjectImagesThree />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export function ProjectListsFour() {
  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <ProjectDetailsFour />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <DefaultImages />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export function ProjectListsFive() {
  return (
    <div className="show-grid">
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>
          <ProjectDetailsFive />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <DefaultImages />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default ProjectListsOne;
