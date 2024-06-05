import React from "react";
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
} from "@elastic/eui";
import "./Projects.css";

const Projects = () => {
  return (
    <EuiFlexGroup
      gutterSize="l"
      alignItems="flexStart"
      style={{ padding: "20px" }}
    >
      <EuiFlexItem style={{ marginLeft: 0 }}>
        <EuiCard
          className="cardComponent"
          textAlign="left"
          image={
            <div>
              <img
                src="https://source.unsplash.com/400x200/?Nature"
                alt="Nature"
              />
            </div>
          }
          title="Flashcard App"
          description="React app that allows students to create decks that contain flashcards in which they can add or edit."
          footer={
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem>
                <EuiButton href="https://github.com/liz-niedz/Flashcard-app">
                  Link to Code
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          className="cardComponent"
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Water"
          title="Elastic in Water"
          description="Example of a card's description. Stick to one or two sentences."
          footer={
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem>
                <EuiButton>Go for it</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          className="cardComponent"
          textAlign="left"
          image="https://source.unsplash.com/400x200/?City"
          icon={<EuiIcon size="xxl" type="logoBeats" />}
          title={"Beats in the City"}
          description="This card has an href and should be a link."
          footer={
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem>
                <EuiButton>Go for it</EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          }
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Projects;
