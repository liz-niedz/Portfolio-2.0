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
import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Home.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Connect = () => {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Optionally, handle the form data, e.g., sending to an API
    console.log(data);
    reset(); // Reset form fields after submission
  };

  return (
    <EuiFlexGroup alignItems="center" justifyContent="center">
      <EuiFlexItem style={{ alignContent: "center" }}>
        <EuiPanel
          style={{
            border: "3px solid #03c2fc",
            margin: "auto",
            padding: "10px",
            width: "60%",
            alignContent: "center",
            textAlign: "center",
            height: "40%",
          }}
        >
          <EuiTitle>
            <p style={{ paddingBottom: "10px" }}>Let's Connect!</p>
          </EuiTitle>
          <EuiForm
            method="POST"
            component="form"
            name="contactForm"
            action="/thank-you/" // Optional: Redirect to a thank-you page after submission
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "inline-block" }}
          >
            <input type="hidden" name="form-name" value="contactForm" />
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

// import {
//   EuiButton,
//   EuiFieldText,
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiForm,
//   EuiFormRow,
//   EuiPanel,
//   EuiTextArea,
//   EuiTitle,
// } from "@elastic/eui";
// import React, { useRef, useState, useEffect } from "react";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import "./Home.css";

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const Connect = () => {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

//   return (
//     // <EuiFlexGroup alignItems="center" justifyContent="center">
//     //   <EuiFlexItem style={{ alignContent: "center" }}>
//     //     <EuiPanel
//     //       style={{
//     //         border: " 3px solid #03c2fc",
//     //         margin: "auto",
//     //         padding: "10px",
//     //         width: "60%",
//     //         alignContent: "center",
//     //         textAlign: "center",
//     //         height: "40%",
//     //       }}
//     //     >
//     //       <form method="POST" name="contactform" className="contactForm">
//     //         <input type="hidden" name="form-name" value="contactForm" />

//     //         <input type="text" name="name" placeholder="Enter your name" />

//     //         <input type="email" name="email" placeholder="Enter your email" />

//     //         <textarea name="message" placeholder="Messaage"></textarea>

//     //         <button type="submit">Submit</button>
//     //       </form>
//     //     </EuiPanel>
//     //   </EuiFlexItem>
//     // </EuiFlexGroup>
//     <EuiFlexGroup alignItems="center" justifyContent="center">
//       <EuiFlexItem style={{ alignContent: "center" }}>
//         <EuiPanel
//           style={{
//             border: " 3px solid #03c2fc",
//             margin: "auto",
//             padding: "10px",
//             width: "60%",
//             alignContent: "center",
//             textAlign: "center",
//             height: "40%",
//           }}
//         >
//           <EuiTitle>
//             <p style={{ paddingBottom: "10px" }}>Lets Connect!</p>
//           </EuiTitle>
//           <EuiForm
//             method="POST"
//             component="form"
//             name="contactForm" // Ensure this matches the hidden input exactly
//             onSubmit={handleSubmit((data) => {
//               console.log(data);
//               alert(JSON.stringify(data));
//             })}
//             style={{ display: "inline-block" }}
//             action="/thank-you/" // Optional: Redirect to a thank-you page after submission
//           >
//             <input type="hidden" name="form-name" value="contactForm" />
//             <EuiFormRow label="Name">
//               <Controller
//                 name="name"
//                 render={({ field }) => <EuiFieldText {...field} />}
//               />
//             </EuiFormRow>
//             <EuiFormRow label="Email">
//               <Controller
//                 name="email"
//                 render={({ field }) => <EuiFieldText {...field} />}
//               />
//             </EuiFormRow>
//             <EuiFormRow label="Message">
//               <Controller
//                 name="message"
//                 render={({ field }) => <EuiTextArea {...field} />}
//               />
//             </EuiFormRow>
//             <EuiFormRow>
//               <EuiButton type="submit" className="homeButton">
//                 Submit
//               </EuiButton>
//             </EuiFormRow>
//           </EuiForm>
//         </EuiPanel>
//       </EuiFlexItem>
//     </EuiFlexGroup>
//   );
// };

// export default Connect;
