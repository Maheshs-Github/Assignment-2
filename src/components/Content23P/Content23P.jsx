import React from "react";
import Content2 from "../Content2/Content2";
import Content3 from "../Content3/Content3";

const Content23P = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-7">
            <Content2 />
          </div>
          <div class="col">
            <Content3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content23P;
