import React from "react";

import { Spin } from "./spin.styles";
import { FaSpinner } from "react-icons/fa";

interface SpinnerType {}

const Spinner: React.FC<SpinnerType> = (props) => {
  return (
    <Spin>
      <FaSpinner />
    </Spin>
  );
};

export default Spinner;
