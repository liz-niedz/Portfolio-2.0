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
import React, { useRef, useState, useEffect } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import "./Home.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Connect = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

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
            textAlign: "center",
            height: "40%",
          }}
        >
          <EuiTitle>
            <p style={{ paddingBottom: "10px" }}>Lets Connect!</p>
          </EuiTitle>
          <EuiForm
            component="form"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              alert(JSON.stringify(data));
            })}
            style={{ display: "inline-block" }}
          >
            <EuiFormRow label="Name">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <EuiFieldText {...field} />}
              />
            </EuiFormRow>
            <EuiFormRow label="Email">
              <Controller
                name="email"
                control={control}
                render={({ field }) => <EuiFieldText {...field} />}
              />
            </EuiFormRow>
            <EuiFormRow label="Message">
              <Controller
                name="message"
                control={control}
                render={({ field }) => <EuiTextArea {...field} />}
              />
            </EuiFormRow>
            <EuiFormRow>
              <EuiButton type="submit" className="homeButton">
                Submit
              </EuiButton>
            </EuiFormRow>
          </EuiForm>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Connect;
