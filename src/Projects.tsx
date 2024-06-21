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
      gutterSize="s"
      alignItems="flexStart"
      style={{ padding: "20px" }}
    >
      <EuiFlexItem style={{ marginLeft: 0 }}>
        <EuiCard
          className="cardComponent"
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Flashcard App"
          description="React app that allows students to create decks that contain flashcards in which they can add or edit."
          footer={
            <EuiFlexItem>
              <EuiButton href="https://github.com/liz-niedz/Flashcard-app">
                Link to Code
              </EuiButton>
            </EuiFlexItem>
          }
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          className="cardComponent"
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Water"
          title="Code Challenge"
          description="An app that allows a user to create and edit items as well as list them."
          footer={
            <EuiFlexGroup justifyContent="flexEnd">
              <EuiFlexItem>
                <EuiButton href="https://github.com/liz-niedz/code-challenge">
                  Link to Code
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          }
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Projects;
