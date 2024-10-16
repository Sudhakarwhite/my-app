import React from "react";
import SearchField from "./Component/SearchField";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import CustomizedStepper from "./Component/Stepper";
import { Transcription } from "./Component/Tooltip";

export const App = () => {
  return (
    <div
      className="App "
      style={{
        background: "radial-gradient(circle, #ff7f50, #1e90ff)",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchField />
          </div>
          <div className="col-md-12 mt-5">
            <CustomizedStepper />
            <div style={{ marginTop: "15px" }}>
              <Transcription />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
