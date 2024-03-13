import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiPanel,
  EuiTextArea,
  EuiTitle,
} from "@elastic/eui";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import "./Home.css";

type FormData = {
  name: string;
  email: string;
};

const Connect = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(({ name, email }) => {
    console.log(name, email);
  });

  return (
    <EuiFlexGroup alignItems="center" justifyContent="center">
      <EuiFlexItem style={{ alignContent: "center" }}>
        <EuiPanel
          style={{
            border: " 3px solid #03c2fc",
            margin: "auto",
            padding: "10px",
            width: "60%",
            alignContent: "center",
            // width: "50%",
            // maxWidth: 350,
            textAlign: "center",
            height: "40%",
            // margin: "auto",
            // marginTop: "15%",
          }}
        >
          <EuiTitle>
            <p style={{ paddingBottom: "10px" }}>Lets Connect!</p>
          </EuiTitle>
          <EuiForm onSubmit={onSubmit} style={{ display: "inline-block" }}>
            <EuiFormRow label="name">
              <EuiFieldText
                //value={value}
                //inputRef={{...register("name")}}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiFormRow>
            <EuiFormRow label="Email">
              <EuiFieldText
                // value={value}
                //onChange={(e) => onChange(e)}
                // onChange={e => {
                //   setValue("email", e.target.value);
                // }}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiFormRow>
            <EuiFormRow label="Message">
              <EuiTextArea
                //value={value}
                //onChange={(e) => onChange(e)}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiFormRow>
            <EuiFormRow>
              <EuiButton className="homeButton">Submit</EuiButton>
            </EuiFormRow>
          </EuiForm>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Connect;
